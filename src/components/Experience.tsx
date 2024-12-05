import TimeLine from "./TimeLine"
import Title from "./Title"


const Experience = ({ handleMouseEnter }: { handleMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => void }) => {
    return (
        <div className=" min-h-[30vh] h-max sm:flex space-y-4 items-center justify-between snap-center">
            <Title>EXPERIENCE</Title>
            <div className=" w-3/4">
            <div onMouseEnter={handleMouseEnter} className=" w-fit p-3 py-2">
                <p className=" font-bold min-w-max">Full Stack Developer Intern</p>
                <p className=" text-sm">Spinovix Software Pvt. Ltd</p>
                <TimeLine startDate="May 2024" endDate="Present" />
            </div>
            </div>
        </div>
    )
}

export default Experience
