import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useLayoutEffect } from "react"



const useCharacterScroll = () => {
    const tl = gsap.timeline();
    const { scene, camera } = useThree()
    console.log(window.innerWidth)
    useLayoutEffect(() => {
        tl

            .to(scene.position, {
                "x": window.innerWidth > 400 ? 5 : 2, "y": 0.5, "z": -2,
                transition: "1s",
                scrollTrigger: {
                    trigger: "#intro",
                    start: "top bottom",   //when top is at botton
                    end: "top top",   //when top is at top,
                    scrub: true,
                    immediateRender: false,
                },
            })
            .to(scene.rotation, {
                "x": 0, "y": window.innerWidth > 400 ? 0.8 - 1.5 : -0.3, "z": 0,
                scrollTrigger: {
                    trigger: "#intro",
                    start: "top bottom",   //when top is at botton
                    end: "top top",   //when top is at top,
                    scrub: true,
                    immediateRender: false,
                }
            })
            .to(scene.rotation, {
                "x": 0, "y": -1.6, "z": 0,
                scrollTrigger: {
                    trigger: "#about",
                    start: "top bottom",   //when top is at botton
                    end: "top top",   //when top is at top,
                    scrub: true,
                    immediateRender: false,
                }
            })
            .to(scene.position, {
                "x": window.innerWidth > 400 ? 5 : 3, "y": 0, "z": -2.60,
                scrollTrigger: {
                    trigger: "#about",
                    start: "top bottom",   //when top is at botton
                    end: "top top",   //when top is at top,
                    scrub: true,
                    immediateRender: false,
                }
            })
            .to(scene.position, {
                x: -2.8, y: 1, z: 0,
                scrollTrigger: {
                    trigger: "#skills",
                    start: "top bottom",   //when top is at botton
                    end: "top top",   //when top is at top,
                    scrub: true,
                    immediateRender: false,
                }
            })
            .to(scene.rotation, {
                x: 0.05, y: 1.9, z: 0,
                scrollTrigger: {
                    trigger: "#skills",
                    start: "top bottom",   //when top is at botton
                    end: "top top",   //when top is at top,
                    scrub: true,
                    immediateRender: false,
                }
            })
            .to(scene.position, {
                x: -2.5, y: 0, z: 2,
                opacity: 0.1,
                scale: 0,
                scrollTrigger: {
                    trigger: "#projects",
                    start: "top bottom",   //when top is at botton
                    end: "top top",   //when top is at top,
                    scrub: true,
                    immediateRender: false,
                }
            })
            .to("#character", {
                opacity: 0,
                scrollTrigger: {
                    trigger: "#projects",
                    start: "top bottom",   //when top is at botton
                    end: "top top",   //when top is at top,
                    scrub: true,
                    immediateRender: false,
                }
            })




    }, [camera.position, scene.position, scene.rotation, tl])




    // const { scenePosition, sceneRotation } = useControls({
    //     scenePosition: {
    //         value: { x: 0.8, y: 0, z: 0.75 }, step: 0.05
    //     },
    //     sceneRotation: {
    //         value: { x: 0.05, y: 3, z: 0 }, step: 0.05
    //     },
    // })
    // useFrame(() => {
    //     scene.position.x = scenePosition.x;
    //     scene.position.y = scenePosition.y;
    //     scene.position.z = scenePosition.z;
    //     scene.rotation.x = sceneRotation.x;
    //     scene.rotation.y = sceneRotation.y;
    //     scene.rotation.z = sceneRotation.z;
    // });
}

export default useCharacterScroll