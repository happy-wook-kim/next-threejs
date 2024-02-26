"use client"

import Image from "next/image";
import ThreeComponent from "./(three)/threejs";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useControls } from 'leva'

function Lights() {
  const ambientRef = useRef<any>(null!)
  const directionalRef = useRef<any>(null!)
  // const pointRef = useRef<any>(null!)
  // const spotRef = useRef<any>(null!)

  useControls('Ambient Light', {
    visible: {
      value: false,
      onChange: (v:any) => {
        ambientRef.current.visible = v
      },
    },
    color: {
      value: 'white',
      onChange: (v:any) => {
        ambientRef.current.color = new THREE.Color(v)
      },
    },
  })

  useControls('Directional Light', {
    visible: {
      value: true,
      onChange: (v:any) => {
        directionalRef.current.visible = v
      },
    },
    position: {
      x: 1,
      y: 1,
      z: 1,
      onChange: (v:any) => {
        directionalRef.current.position.copy(v)
      },
    },
    color: {
      value: 'white',
      onChange: (v:any) => {
        directionalRef.current.color = new THREE.Color(v)
      },
    },
  })

  return (
    <>
      <ambientLight ref={ambientRef} />
      <directionalLight ref={directionalRef} />
      {/* <pointLight ref={pointRef} />
      <spotLight ref={spotRef} /> */}
    </>
  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div style={{ width: "80vw", height: "70vh" }}>
        <Canvas
          shadows
          camera={{
            position: [0, 1, 1],
          }}
        >
        <Lights />
        <ambientLight intensity={4}/>
          <ThreeComponent position={[0, 0, 0]} />
          <gridHelper args={[4, 4, 4]} />
          {/* <axesHelper args={[2]} /> */}
          <Stats />
          <OrbitControls />
        </Canvas>
      </div>
    </main>
  );
}
