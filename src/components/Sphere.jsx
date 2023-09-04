import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import { useLoader } from "react-three-fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from '../assets/water.jpg'

const AnimatedSphere = () => {
    const colorMap = useLoader(TextureLoader, texture);
    return (
        <Canvas className="canvas">
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <Sphere args={[1, 100, 200]} visible scale={2}>
                <MeshDistortMaterial
                    map={colorMap}
                    distort={0.4}
                    speed={1}
                    roughness={0}
                />
            </Sphere>
        </Canvas>
    )
}

export default AnimatedSphere;