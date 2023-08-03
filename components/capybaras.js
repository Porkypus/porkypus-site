import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../lib/model'
import { CapybarasContainer, CapybarasSpinner } from './capybaras-loader'

function easeOutCirc(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const Capybaras = () => {
    const refContainer = useRef()
    const [loading, setLoading] = useState(true)
    const refRenderer = useRef()

    const handleWindowResize = useCallback(() => {
        const { current: renderer } = refRenderer
        const { current: container } = refContainer
        if (container && renderer) {
            const scW = container.clientWidth
            const scH = container.clientHeight

            renderer.setSize(scW, scH)
        }
    }, [])

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        const { current: container } = refContainer
        if (container) {
            const scW = container.clientWidth
            const scH = container.clientHeight

            const renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true
            })
            renderer.setPixelRatio(window.devicePixelRatio)
            renderer.setSize(scW, scH)
            renderer.outputColorSpace = THREE.SRGBColorSpace
            container.appendChild(renderer.domElement)
            refRenderer.current = renderer
            const scene = new THREE.Scene()

            const target = new THREE.Vector3(-0.5, 0.6, 0)
            const initialCameraPosition = new THREE.Vector3(
                30 * Math.sin(0.2 * Math.PI),
                10,
                20 * Math.cos(0.2 * Math.PI)
            )

            // 640 -> 240
            // 8   -> 6
            const scale = scH * 0.005
            const camera = new THREE.OrthographicCamera(
                -scale,
                scale,
                scale,
                -scale,
                0.01,
                50000
            )
            camera.position.copy(initialCameraPosition)
            camera.lookAt(target)

            const ambientLight = new THREE.AmbientLight(0xffffff, 4)
            scene.add(ambientLight)

            const controls = new OrbitControls(camera, renderer.domElement)
            controls.autoRotate = true
            controls.target = target

            loadGLTFModel(scene, '/capybaras.glb', {
                receiveShadow: false,
                castShadow: false
            }).then(() => {
                animate()
                setLoading(false)
            })

            let req = null
            let frame = 0
            const animate = () => {
                req = requestAnimationFrame(animate)

                frame = frame <= 100 ? frame + 1 : frame

                if (frame <= 100) {
                    const p = initialCameraPosition
                    const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

                    camera.position.y = 10
                    camera.position.x =
                        p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
                    camera.position.z =
                        p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
                    camera.lookAt(target)
                } else {
                    controls.update()
                }

                renderer.render(scene, camera)
            }

            return () => {
                cancelAnimationFrame(req)
                renderer.domElement.remove()
                renderer.dispose()
            }
        }
    }, [])

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize, false)
        return () => {
            window.removeEventListener('resize', handleWindowResize, false)
        }
    }, [handleWindowResize])

    return (
        <CapybarasContainer ref={refContainer}>
            {loading && <CapybarasSpinner />}
        </CapybarasContainer>
    )
}

export default Capybaras
