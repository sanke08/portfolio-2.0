import Title from "./Title"
import TimeLine from "./TimeLine"
import { LegacyRef } from "react"


const Experience = ({ expRef }:{expRef:LegacyRef<HTMLDivElement>}) => {
    return (
        <div ref={expRef} className=" h-max translate-y-1/3 mt-4 opacity-0 w-full ease-out transition-all duration-1000 p-6 py-3 border-2 rounded-lg">
            <Title>Experience</Title>
            <p className=" font-bold min-w-max">Full Stack Developer Intern</p>
            <p className=" text-sm">Spinovix Software Pvt. Ltd</p>
            <TimeLine startDate="May 2024" endDate="Present" />
        </div>
    )
}

export default Experience
