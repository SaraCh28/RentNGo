"use client";

import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Box3, Vector3, Group } from "three";

export default function CarScene3D() {
  return (
    <div className="w-full h-screen bg-gray-900">
      <Canvas camera={{ position: [0, 2, 6], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <directionalLight position={[-5, 5, -5]} intensity={1} />
        <OrbitControls />
        <Suspense fallback={null}>
          <CarModel />
        </Suspense>
      </Canvas>
    </div>
  );
}

function CarModel() {
  const { scene } = useGLTF("/bugatti/scene.gltf");

  // Make all meshes visible
  scene.traverse((child) => {
    if (child.isMesh) child.visible = true;
  });

  // Compute bounding box
  const box = new Box3().setFromObject(scene);
  const center = new Vector3();
  box.getCenter(center);

  const size = box.getSize(new Vector3()).length();
  const scale = 50 / size;

  // Compute offset so car sits above "ground"
  const yOffset = -box.min.y * scale;
  const xOffset = -center.x * scale;
  const zOffset = -center.z * scale;

  return (
    <group position={[0, yOffset, 0]} scale={[scale, scale, scale]}>
      <primitive object={scene} />
    </group>
  );
}
