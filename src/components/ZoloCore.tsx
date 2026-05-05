import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.005;
      
      // Pulse effect on hover
      if (hovered) {
        const time = state.clock.getElapsedTime();
        meshRef.current.scale.setScalar(1 + Math.sin(time * 5) * 0.05);
      } else {
        meshRef.current.scale.setScalar(1);
      }
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere
        ref={meshRef}
        args={[1, 64, 64]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <MeshDistortMaterial
          color={hovered ? "#00f3ff" : "#b87333"}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          wireframe={true}
        />
      </Sphere>
      
      {/* Internal "Brain" Core */}
      <mesh scale={0.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
          color="#00f3ff" 
          emissive="#00f3ff" 
          emissiveIntensity={2} 
          wireframe 
        />
      </mesh>
    </Float>
  );
}

export default function ZoloCore() {
  return (
    <div className="w-full h-full min-h-[400px] cursor-pointer">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 4]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00f3ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#b87333" />
        <spotLight position={[0, 5, 0]} intensity={2} color="#ffffff" />
        
        <AnimatedSphere />
        
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
