"use client"
import * as THREE from 'three'
import { createRoot } from 'react-dom/client'
import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements, useLoader } from '@react-three/fiber'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"

export default function ThreeComponent(props: ThreeElements['mesh']) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame((state, delta) => {
    meshRef.current.rotation.x += 0 * delta;
    meshRef.current.rotation.y += 0.3 * delta;
  })

  const gltf = useLoader(GLTFLoader, '/scene.gltf')

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.15 : 1}
      // onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
      receiveShadow
      castShadow>
      {/* <boxGeometry args={[3, 3, 3]} /> */}
      <primitive object={gltf.scene} />
      {/* <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} /> */}
      <meshPhysicalMaterial color='white' />
    </mesh>
  )
}