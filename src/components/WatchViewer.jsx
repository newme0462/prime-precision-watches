import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js'

/**
 * Interactive 3D model viewer built on Three.js.
 * Supports Meshopt- and Draco-compressed GLB files, auto-rotate,
 * orbit/zoom controls and automatic camera framing.
 */
export default function WatchViewer({ src, alt = '3D model' }) {
  const containerRef = useRef(null)
  const [status, setStatus] = useState('loading') // loading | ready | error
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let disposed = false
    let frameId = 0

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2
    renderer.setClearColor(0x000000, 0)
    renderer.domElement.style.width = '100%'
    renderer.domElement.style.height = '100%'
    renderer.domElement.style.display = 'block'
    renderer.domElement.style.outline = 'none'
    container.appendChild(renderer.domElement)

    // Scene, environment lighting & camera
    const scene = new THREE.Scene()
    const pmrem = new THREE.PMREMGenerator(renderer)
    const envTexture = pmrem.fromScene(new RoomEnvironment(), 0.04).texture
    scene.environment = envTexture

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2)
    keyLight.position.set(3, 4, 5)
    scene.add(keyLight)

    const camera = new THREE.PerspectiveCamera(35, 1, 0.01, 1000)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.08
    controls.enablePan = false
    controls.autoRotate = true
    controls.autoRotateSpeed = 2

    // Sizing
    const resize = () => {
      const { clientWidth: w, clientHeight: h } = container
      if (!w || !h) return
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    resize()
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(container)

    // Loader
    const draco = new DRACOLoader()
    draco.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/')
    const loader = new GLTFLoader()
    loader.setDRACOLoader(draco)
    loader.setMeshoptDecoder(MeshoptDecoder)

    let model = null
    loader.load(
      src,
      (gltf) => {
        if (disposed) return
        model = gltf.scene

        // Center the model and frame the camera around it
        const box = new THREE.Box3().setFromObject(model)
        const center = box.getCenter(new THREE.Vector3())
        model.position.sub(center)
        scene.add(model)

        const radius = box.getBoundingSphere(new THREE.Sphere()).radius || 1
        const fov = THREE.MathUtils.degToRad(camera.fov)
        const distance = (radius / Math.sin(fov / 2)) * 1.05

        camera.near = distance / 100
        camera.far = distance * 100
        camera.updateProjectionMatrix()
        camera.position.setFromSphericalCoords(
          distance,
          THREE.MathUtils.degToRad(75),
          THREE.MathUtils.degToRad(45)
        )
        controls.minDistance = distance * 0.4
        controls.maxDistance = distance * 2.5
        controls.update()

        setStatus('ready')
      },
      (event) => {
        if (!disposed && event.lengthComputable) {
          setProgress(Math.round((event.loaded / event.total) * 100))
        }
      },
      (error) => {
        console.error('Error loading model:', error)
        if (!disposed) setStatus('error')
      }
    )

    // Render loop
    const animate = () => {
      frameId = requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // Cleanup
    return () => {
      disposed = true
      cancelAnimationFrame(frameId)
      resizeObserver.disconnect()
      controls.dispose()
      draco.dispose()
      if (model) {
        model.traverse((obj) => {
          if (obj.isMesh) {
            obj.geometry?.dispose()
            const materials = Array.isArray(obj.material) ? obj.material : [obj.material]
            materials.forEach((m) => {
              if (!m) return
              Object.values(m).forEach((v) => v && v.isTexture && v.dispose())
              m.dispose()
            })
          }
        })
      }
      envTexture.dispose()
      pmrem.dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [src])

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label={alt}
      className="relative z-10 h-full w-full scale-110 cursor-grab drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] active:cursor-grabbing"
    >
      {status === 'loading' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-xs text-gray-400">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-600 border-t-white" />
          <span>Loading 3D model{progress > 0 ? ` ${progress}%` : '…'}</span>
        </div>
      )}
      {status === 'error' && (
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center text-sm text-gray-400">
          The 3D model could not be loaded. Please check your connection and refresh.
        </div>
      )}
    </div>
  )
}
