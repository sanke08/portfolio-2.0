import { Canvas } from "@react-three/fiber"
import Character from './Character'

const CanvasContainer = () => {
    return (
        
        <Canvas>
            <ambientLight intensity={14} />
            <Character />
        </Canvas>
    )
}

export default CanvasContainer
