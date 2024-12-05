
import TimeLine from "./TimeLine"
import { twMerge } from "tailwind-merge"
import Title from "./Title"


const Edu = [
    {
        field: "B.tech Computer Science Engineering",
        college: "Gayakwad collge of Engineering and technology",
        marks: "8.4 CGPA",
        startDate: "Nov 2022",
        endDate: "Present"
    },
    {
        field: "HSC",
        college: "Sevasadan Jr. College",
        marks: "67 %",
        startDate: "2020",
        endDate: "2022"
    },
    {
        field: "SSC",
        college: "Somalwar High School, Khamla",
        marks: "92 %",
        startDate: "2010",
        endDate: "2020"
    },

]

const Education = ({ handleMouseEnter }: { handleMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => void }) => {
    return (
        <div  className=" sm:flex space-y-4 justify-between  min-h-[60vh] items-center snap-center">
            <Title>EDUCATION</Title>
            <div className="grid sm:grid-cols-2 w-3/4 gap-8 h-fit ">
                {
                    Edu.map((edu, i) => (
                        < div onMouseEnter={handleMouseEnter} key={edu.marks} className={twMerge("border-neutral-400/40 border-dashed p-2 ", i == 0? " border border-neutral-400 rounded-lg md:col-span-2 w-fit":"border-b")}>
                            <p className=" text w-max font-bold">{edu.field}</p>
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className=" capitalize text-wrap text-sm">{edu.college} </p>
                                    <TimeLine startDate={edu.startDate} endDate={edu.endDate} />
                                </div>
                                <p className=" text-nowrap">{edu.marks}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Education

