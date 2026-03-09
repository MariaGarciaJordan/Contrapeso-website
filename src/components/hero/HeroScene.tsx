import { Canvas, useFrame } from '@react-three/fiber'
import {
  Float,
  MeshDistortMaterial,
  MeshTransmissionMaterial,
  OrbitControls,
  Points,
  PointMaterial,
} from '@react-three/drei'
import { useMemo, useRef } from 'react'
import type { Group, Points as ThreePoints } from 'three'

function BackgroundParticles() {
  const ref = useRef<ThreePoints | null>(null)

  const positions = useMemo(() => {
    const points = new Float32Array(700 * 3)

    for (let i = 0; i < 700; i += 1) {
      points[i * 3] = (Math.random() - 0.5) * 18
      points[i * 3 + 1] = (Math.random() - 0.5) * 12
      points[i * 3 + 2] = (Math.random() - 0.5) * 12
    }

    return points
  }, [])

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.02
    ref.current.rotation.x += delta * 0.01
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial transparent size={0.045} sizeAttenuation depthWrite={false} />
    </Points>
  )
}

function FloatingForms() {
  const groupRef = useRef<Group | null>(null)

  useFrame((state, delta) => {
    if (!groupRef.current) return

    groupRef.current.rotation.y += delta * 0.08
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.35) * 0.15
  })

  return (
    <group ref={groupRef}>
      <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.9}>
        <mesh position={[-2.6, 1.2, -0.5]} scale={1.45}>
          <icosahedronGeometry args={[1, 12]} />
          <MeshDistortMaterial
            color="#0043BE"
            distort={0.45}
            speed={1.2}
            roughness={0.15}
            metalness={0.1}
          />
        </mesh>
      </Float>

      <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[2.4, -1.3, -0.8]} scale={1.2}>
          <torusKnotGeometry args={[0.75, 0.24, 220, 32]} />
          <meshStandardMaterial
            color="#D66528"
            roughness={0.25}
            metalness={0.2}
          />
        </mesh>
      </Float>

      <Float speed={1.4} rotationIntensity={0.45} floatIntensity={1.2}>
        <mesh position={[0.55, 0.15, 0.6]} scale={1.35}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshTransmissionMaterial
            thickness={0.35}
            roughness={0.12}
            chromaticAberration={0.03}
            transmission={1}
            ior={1.15}
            color="#CAD64A"
            backside
          />
        </mesh>
      </Float>
    </group>
  )
}

export function HeroScene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        dpr={[1, 1.8]}
        camera={{ position: [0, 0, 7], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#171E22']} />
        <fog attach="fog" args={['#171E22', 6, 14]} />

        <ambientLight intensity={1.1} />
        <directionalLight position={[3, 4, 2]} intensity={2.1} color="#ffffff" />
        <pointLight position={[-4, 2, 3]} intensity={18} color="#0043BE" />
        <pointLight position={[4, -2, 3]} intensity={14} color="#D66528" />
        <pointLight position={[0, 3, 4]} intensity={10} color="#CAD64A" />

        <BackgroundParticles />
        <FloatingForms />

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.28} />
      </Canvas>
    </div>
  )
}
