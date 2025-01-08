import { twMerge } from "tailwind-merge"
import TimeLine from "./TimeLine"
import Title from "./Title"


const Experience = ({ handleMouseEnter }: { handleMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => void }) => {
    return (
        <div className=" min-h-[30vh] h-max sm:flex space-y-4 items-center justify-between snap-center">
            <Title>EXPERIENCE</Title>
            <div className=" w-3/4 flex gap-4">
                {
                    data.map((item,i) => (
                        <div onMouseEnter={handleMouseEnter} className={twMerge(" w-fit px-4 space-y-1 py-2 shrink-0",i===0&&"border rounded-lg border-dashed border-neutral-400")}>
                            <p className=" font-bold min-w-max">{item.title}</p>
                            <p className=" text-sm">{item.company}</p>
                            <TimeLine startDate={item.start} endDate={item.end} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Experience



const data = [
    {
        title: "Web Developer Intern",
        company: "Unifins IT Hub Pvt. Ltd",
        start: "Dec 2024",
        end: "Present",
    },
    {
        title: "Full Stack Developer Intern",
        company: "Spinovix Software Pvt. Ltd",
        start: "May 2024",
        end: "Dec 2024",
    },
]