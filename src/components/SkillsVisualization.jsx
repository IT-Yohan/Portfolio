import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Individual skill sphere component
const SkillSphere = ({ position, name, color, size }) => {
  const meshRef = useRef();
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group position={position}>
      <Sphere ref={meshRef} args={[size, 32, 32]}>
        <meshStandardMaterial 
          color={color} 
          roughness={0.3} 
          metalness={0.7}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </Sphere>
      <Text
        position={[0, -size - 0.3, 0]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </group>
  );
};

// Main 3D skills visualization component
const SkillsVisualization = () => {
  const skills = [
    { name: 'React', color: '#61DAFB', size: 0.7, position: [-2, 1, 0] },
    { name: 'Symfony', color: '#FFFFFF', size: 0.65, position: [0, 1.5, 0] },
    { name: 'Angular', color: '#DD0031', size: 0.6, position: [2, 1, 0] },
    { name: 'Docker', color: '#2496ED', size: 0.5, position: [-1.5, -0.5, 1] },
    { name: 'Git', color: '#F05032', size: 0.55, position: [1.5, -0.5, 1] },
    { name: 'Figma', color: '#A259FF', size: 0.45, position: [-1, -1.5, 0] },
    { name: 'Jira', color: '#0052CC', size: 0.5, position: [1, -1.5, 0] },
  ];

  return (
    <div style={{ height: '400px', width: '100%', marginTop: '2rem', marginBottom: '2rem' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        {skills.map((skill, index) => (
          <SkillSphere
            key={index}
            position={skill.position}
            name={skill.name}
            color={skill.color}
            size={skill.size}
          />
        ))}
        
        <OrbitControls 
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
};

export default SkillsVisualization;
