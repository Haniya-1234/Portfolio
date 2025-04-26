import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const FloatingShape = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    meshRef.current.scale.x = 1 + Math.sin(state.clock.elapsedTime) * 0.1;
    meshRef.current.scale.y = 1 + Math.sin(state.clock.elapsedTime) * 0.1;
    meshRef.current.scale.z = 1 + Math.sin(state.clock.elapsedTime) * 0.1;
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1, 0.3, 128, 16]} />
      <meshStandardMaterial 
        color="#8B5CF6"
        wireframe
        transparent
        opacity={0.3}
        emissive="#8B5CF6"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
};

export default FloatingShape;