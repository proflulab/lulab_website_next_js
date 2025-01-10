import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useTranslations } from 'next-intl';

// 主组件：球形点交互
export default function SphericalPointsInteraction() {
    const t = useTranslations('BootcampPage.Cube');
    const data = useMemo(() => {
        return Array.from({ length: 6 }, (_, i) => ({
            title: t(`features.${i}.title`),
            description: t(`features.${i}.description`)
        }));
    }, [t]);

    return (
        <Canvas
            style={{ height: '100vh' }}
            camera={{ position: [0, 0, 18], fov: 30 }}
        >
            <ambientLight intensity={0.7} /> {/* 环境光 */}
            <group position={[3, -1, 0]}> {/* 统一向移动个单位 */}
                <Particles />
                <pointLight position={[10, 10, 10]} intensity={1} /> {/* 点光源 */}
                <OrbitControls enableZoom={false} enableRotate={false} />
                <SphericalPoints data={data} />
            </group>
        </Canvas>
    );
}

// 球形点组件
function SphericalPoints({ data }: { data: { title: string; description: string }[] }) {
    const radius = 2.8; // 球体半径
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const sphereRef = useRef<THREE.Mesh>(null);
    const [rotation, setRotation] = useState(0);

    // 使用 useMemo 优化性能，只在 radius 变化时重新计算点
    const points = useMemo(() => generateSphericalPoints(data.length, radius), [radius, data.length]);

    // Generate gradient colors for cards
    const gradientColors = useMemo(() => {
        return Array(data.length).fill(0).map(() => {
            const hue1 = Math.random() * 360;
            const hue2 = (hue1 + 40) % 360; // Complementary hue
            return `linear-gradient(135deg, 
                hsla(${hue1}, 70%, 60%, 0.9),
                hsla(${hue2}, 70%, 60%, 0.9))`;
        });
    }, [data.length]);

    useFrame((state, delta) => {
        if (sphereRef.current) {
            sphereRef.current.rotation.y += delta * 0.1;
            setRotation(prev => prev + delta * 0.1);
        }
    });

    // 计算旋转后的点位置
    const getRotatedPosition = (point: THREE.Vector3, rotation: number) => {
        const x = point.x * Math.cos(rotation) - point.z * Math.sin(rotation);
        const z = point.x * Math.sin(rotation) + point.z * Math.cos(rotation);
        return new THREE.Vector3(x, point.y, z);
    };

    return (
        <>
            {/* 球体网格 */}
            <mesh ref={sphereRef}>
                <sphereGeometry args={[radius, 32, 32]} />
                <meshStandardMaterial
                    color="rgba(0, 128, 255, 0.8)" // 设置线条颜色为蓝色（可以自定义）
                    wireframe
                    transparent
                    opacity={0.7}
                />
            </mesh>
            {/* 渲染每个点 */}
            {points.map((point, index) => {
                const rotatedPoint = getRotatedPosition(point, rotation);
                return (
                    <Html key={index} position={rotatedPoint.toArray()} center>
                        <div
                            style={{
                                padding: '20px',
                                borderRadius: '15px',
                                textAlign: 'center',
                                background: gradientColors[index],
                                boxShadow: hoveredIndex === index
                                    ? '0 8px 25px rgba(0, 0, 0, 0.2)'
                                    : '0 4px 15px rgba(0, 0, 0, 0.1)',
                                backdropFilter: 'blur(8px)',
                                transform: hoveredIndex === index ? 'scale(1.2)' : 'scale(1)',
                                transition: 'all 0.3s ease-in-out',
                                cursor: 'pointer',
                                width: '220px',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                userSelect: 'none', // 禁止文字选中
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <h3 style={{
                                margin: '0 0 12px',
                                color: '#fff',
                                fontSize: '20px',
                                fontWeight: 'bold',
                                textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                            }}>
                                {data[index].title}
                            </h3>
                            <p style={{
                                margin: 0,
                                color: 'rgba(255, 255, 255, 0.9)',
                                fontSize: '15px',
                                lineHeight: '1.4'
                            }}>
                                {data[index].description}
                            </p>
                        </div>
                    </Html>
                );
            })}
        </>
    );
}

// 生成均匀分布在球面上的点
function generateSphericalPoints(count: number, radius: number) {
    const points: THREE.Vector3[] = [];
    const goldenRatio = (1 + Math.sqrt(5)) / 2; // 黄金比例，用于均匀分布
    const angleIncrement = Math.PI * 2 * goldenRatio;

    for (let i = 0; i < count; i++) {
        const t = i / count; // 正规化 t，范围 [0, 1)
        const theta = angleIncrement * i; // 方位角
        const phi = Math.acos(1 - 2 * t); // 极角

        // 计算球面坐标
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.cos(phi);
        const z = radius * Math.sin(phi) * Math.sin(theta);

        points.push(new THREE.Vector3(x, y, z));
    }

    return points;
}

// 粒子背景组件
function Particles() {
    const pointsRef = useRef<THREE.Points>(null);

    const particles = useMemo(() => {
        const positions = [];
        const colors = [];
        const particleCount = 500; // 优化粒子数量

        for (let i = 0; i < particleCount; i++) {
            positions.push((Math.random() - 0.5) * 20);
            positions.push((Math.random() - 0.5) * 20);
            positions.push((Math.random() - 0.5) * 20);

            colors.push(Math.random());
            colors.push(Math.random());
            colors.push(Math.random());
        }
        return {
            positions: new Float32Array(positions),
            colors: new Float32Array(colors),
        };
    }, []);

    useFrame((state, delta) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y += delta * 0.1; // 使用 delta 控制旋转速度
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    array={particles.positions}
                    count={particles.positions.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    array={particles.colors}
                    count={particles.colors.length / 3}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial vertexColors size={0.2} />
        </points>
    );
}
