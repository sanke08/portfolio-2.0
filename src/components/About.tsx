import { LegacyRef } from "react"
import Title from "./Title"

const About = ({aboutRef}:{aboutRef:LegacyRef<HTMLDivElement>}) => {

    return (
        <div ref={aboutRef} className=" h-max w-full translate-y-1/2 opacity-0 transition-all ease-out duration-700  border-2 mt-4 px-6 p-3 rounded-xl">
            <Title>Summary</Title>
            <p>"Hi there! I’m Sanket Gawande, a web developer with a curious mind. I may not have experience yet, but my passion for clean code and seamless user experiences drives me forward. Let’s turn ideas into functional web applications!”</p>
        </div>    
    )
}

export default About