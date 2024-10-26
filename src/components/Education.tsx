
import Title from "./Title"
import TimeLine from "./TimeLine"
import { twMerge } from "tailwind-merge"
import { LegacyRef } from "react"


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

const Education = ({ eduRef }: { eduRef: LegacyRef<HTMLDivElement> }) => {
    return (
        <div ref={eduRef} className=" border-2 mt-4 translate-y-1/4 opacity-0 transition-all duration-1000 rounded-lg p-5">
            <Title>Education</Title>
            <div className=" space-y-4">

                {
                    Edu.map((edu, i) => (
                        < div key={edu.marks} className={twMerge("border-neutral-400/40 border-dashed", i !== 2 && "border-b-2 pb-4")}>
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

