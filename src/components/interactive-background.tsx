'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField({ count = 2000 }) {
    const points = useRef<THREE.Points>(null!);
    const { mouse } = useThree();

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 10;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return pos;
    }, [count]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        // Gentle rotation
        points.current.rotation.x = time * 0.05;
        points.current.rotation.y = time * 0.075;

        // React to mouse
        const targetX = mouse.x * 0.5;
        const targetY = mouse.y * 0.5;

        points.current.position.x += (targetX - points.current.position.x) * 0.02;
        points.current.position.y += (targetY - points.current.position.y) * 0.02;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={points}
                positions={positions}
                stride={3}
                frustumCulled={false}
            >
                <PointMaterial
                    transparent
                    color="#8b5cf6" // A nice violet/purple
                    size={0.02}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
}

export function InteractiveBackground() {
    return (
        <div className="fixed inset-0 -z-10 h-full w-full bg-transparent transition-opacity duration-1000">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <React.Suspense fallback={null}>
                    <ParticleField />
                </React.Suspense>
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background pointer-events-none" />
        </div>
    );
}
