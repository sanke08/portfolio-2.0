import TimeLine from "./TimeLine"


const Experience = () => {
    return (

        <section id="work">
            <div className="flex flex-col gap-y-3">
                <h2 className="text-xl font-bold">Work Experience</h2>
                {
                    data.map((item, i) => (
                        <div key={i} className="rounded-lg bg-card text-card-foreground flex items-center pb-1">
                            <p className="flex rounded-full border md:size-10  size-8 justify-center items-center" >
                                {item.company[0]}
                            </p >
                            <div className="flex-grow ml-4 items-center flex-col group">
                                <div className="flex flex-col">
                                    <div className="flex items-center justify-between gap-x-4 text-base" >
                                        <h3 className=" items-center justify-center font-semibold leading-none text-xs sm:text-sm" >
                                            {item.company}
                                        </h3>
                                        <div className="text-xs sm:text-sm text-right" >
                                            <TimeLine startDate={item.start} endDate={item.end} />
                                        </div>
                                    </div>
                                    <div className="font-sans text-xs">{item.title}</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
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