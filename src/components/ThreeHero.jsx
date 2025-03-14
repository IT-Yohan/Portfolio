import React from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { useRef } from 'react';
import { PerspectiveCamera, Text3D, Center } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const RotatingText = () => {
  const textRef = useRef(null);
  
  useFrame(({ clock }) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
      textRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.1;
    }
  });

  return (
    <group ref={textRef}>
      <Center>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.75}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          YOHAN CHAPUIS
          <meshStandardMaterial 
            color="#3b82f6" 
            metalness={0.8}
            roughness={0.2}
            emissive="#1e40af"
            emissiveIntensity={0.2}
          />
        </Text3D>
      </Center>
    </group>
  );
};

const ThreeHero = () => {
  return (
    <div className="w-full h-[300px] md:h-[400px]">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <RotatingText />
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2.5}
        />
      </Canvas>
    </div>
  );
};

export default ThreeHero;
