import gsap from "gsap"
import { useLayoutEffect } from "react"


const About = () => {
    const tl = gsap.timeline()

    useLayoutEffect(() => {
        tl.to("#container", {
            opacity: 1,
            transition: "0.2",
            translateY: 0,
            scrollTrigger: {
                trigger: "#about",
                start: "top 10%",
                end: "top top",
                immediateRender: false,
                scrub: true,
                // markers: true
            }
        })
    }, [tl])


    return (
        <div id='about' className=' h-screen flex flex-col md:flex-row w-full overflow-hidden pt-20 md:items-center md:px-20 snap-center'>
            <div id="container" className=" flex flex-col md:flex-row md:gap-20  opacity-0 -translate-y-[20rem]">
                <img src={"/Images/9.jpeg"} alt='' className='w-[20rem] h-max rounded-xl mx-auto md:mx-0' />
                <div className=' w-fit'>
                    <p className=' md:text-4xl text-xl py-3'>About <span className='w-max'> Me</span></p>
                    <p className=' md:max-w-[30rem] md:text-xl md:text-justify '>"Hi there! I’m Sanket Gawande, a web developer with a curious mind. I may not have experience yet, but my passion for clean code and seamless user experiences drives me forward. Let’s turn ideas into functional web applications!”</p>
                </div>
            </div>
        </div>
    )
}

export default About