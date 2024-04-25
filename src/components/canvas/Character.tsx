import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react';
import { AnimationMixer } from 'three';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import useCharacterScroll from '../../hooks/useCharacterScroll';

gsap.registerPlugin(ScrollTrigger);


const Character = () => {
    useCharacterScroll()
    const { scene, animations } = useGLTF("/Model/r.glb")

    useEffect(() => {
        const mixer = new AnimationMixer(scene)
        const action = mixer.clipAction(animations[0])

        action.play();

        const animate = () => {
            // Update the animation mixer in your render loop
            mixer.update(0.016); // Assuming 60fps, adjust as needed
            requestAnimationFrame(animate);
        };
        animate();
        return () => {
            mixer.stopAllAction();
        };
    }, [animations, scene])


    return (
        <mesh scale={4}  position={[0, -4.7, 1]}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Character