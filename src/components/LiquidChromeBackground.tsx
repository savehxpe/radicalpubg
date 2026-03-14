import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ChromePlane = () => {
    const materialRef = useRef<THREE.ShaderMaterial>(null);

    useFrame((state) => {
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
            const scrollY = window.scrollY || 0;
            materialRef.current.uniforms.uScroll.value = scrollY * 0.002;
        }
    });

    const vertexShader = `
        uniform float uTime;
        uniform float uScroll;
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vViewPosition;

        void main() {
            vUv = uv;
            vec3 pos = position;
            // Wave ripples toward left and right
            float freq = 2.0;
            float amp = 1.2;
            pos.z += sin(pos.x * freq + uTime * 1.5 + uScroll) * amp;
            pos.z += sin(pos.y * freq * 0.8 + uTime * 1.0) * amp * 0.8;

            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            vViewPosition = -mvPosition.xyz;
            gl_Position = projectionMatrix * mvPosition;
            vNormal = normalMatrix * normal;
        }
    `;

    const fragmentShader = `
        uniform float uTime;
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vViewPosition;

        void main() {
            vec3 normal = normalize(vNormal);
            vec3 viewDir = normalize(vViewPosition);

            vec3 reflection = reflect(-viewDir, normal);
            float m = 2.0 * sqrt(
                pow(reflection.x, 2.0) +
                pow(reflection.y, 2.0) +
                pow(reflection.z + 1.0, 2.0)
            );
            vec2 vN = reflection.xy / m + 0.5;
            
            float intensity = dot(normal, viewDir);
            float mx = sin(vN.x * 20.0 + uTime) * cos(vN.y * 20.0 - uTime * 0.5);
            vec3 baseColor = vec3(0.05); // dark
            vec3 highlight = vec3(0.85); // silver
            
            vec3 finalColor = mix(baseColor, highlight, smoothstep(0.3, 0.7, mx));

            gl_FragColor = vec4(finalColor, 0.4);
        }
    `;

    return (
        <mesh rotation={[-Math.PI / 3, 0, 0]} position={[0, -2, -8]}>
            <planeGeometry args={[50, 50, 128, 128]} />
            <shaderMaterial
                ref={materialRef}
                transparent={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                uniforms={{
                    uTime: { value: 0 },
                    uScroll: { value: 0 }
                }}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                wireframe={false}
            />
        </mesh>
    );
};

export const LiquidChromeBackground: React.FC = () => {
    return (
        <div
            className="fixed inset-0 w-full h-full pointer-events-none"
            style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
        >
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <ChromePlane />
            </Canvas>
        </div>
    );
};
