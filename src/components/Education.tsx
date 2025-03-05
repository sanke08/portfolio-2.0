import TimeLine from "./TimeLine"

const Edu = [
    {
        field: "B.tech Computer Science Engineering",
        college: "Gayakwad collge of Engineering and technology",
        marks: "8.4 CGPA",
        startDate: "2022",
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

const Education = () => {
    return (
        <section id="education">
            <div className="flex flex-col gap-y-3">
                <h2 className="text-xl font-bold">Education</h2>
                {
                    Edu.map((item, i) => (

                        <div className="rounded-lg flex pb-1" key={i}>
                            <div className=" md:size-10 size-8 aspect-square border rounded-full flex justify-center items-center">
                                {item.college[0]}
                            </div>
                            <div className="flex-grow ml-4 items-center flex-col group">
                                <div className="flex flex-col">
                                    <div className="flex items-center justify-between gap-x-4 text-base" >
                                        <h3 className="items-center justify-center leading-3 font-semibold text-xs sm:text-sm" >
                                            {item.college}
                                        </h3>
                                        <div className="text-xs sm:text-sm text-right" >
                                            <TimeLine startDate={item.startDate} endDate={item.endDate} />
                                        </div>
                                    </div>
                                    <div className="font-sans text-xs">{item.field}</div>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>
        </section>


    )
}

export default Education

