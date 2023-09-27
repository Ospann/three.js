// import { BoxBufferGeometry, Mesh, MeshLambertMaterial } from 'three';
import { useLoader } from "react-three-fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from '../assets/tile.jpg'
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";

const Tile = () => {
    const colorMap = useLoader(TextureLoader, texture);
    return (
        <Canvas className="canvas">
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <mesh rotation={[90, 0, 20]}>
                <boxGeometry attach="geometry" args={[2, 0.2, 2]} />
                <meshStandardMaterial map={colorMap} />
            </mesh>
        </Canvas>
    )
}

export default Tile;