import TimeLine from "./TimeLine"


const Experience = () => {
    return (

        <section id="work">
            <div className="flex flex-col gap-y-3">
                <h2 className="text-lg font-bold">Work Experience</h2>
                {
                    data.map((item, i) => (
                        <div key={i} className="rounded-lg bg-card text-card-foreground flex items-center pb-1">
                            <p className="flex rounded-full border md:size-10  size-8 justify-center items-center" >
                                {item.company[0]}
                            </p >
                            <div className="flex-grow sm:ml-4 ml-2 items-center flex-col group">
                                <div className="flex flex-col">
                                    <div className="flex items-center justify-between gap-x-4 text-base" >
                                        <h3 className=" items-center justify-center font-semibold leading-none text-xs sm:text-sm  transition-all duration-300 dark:text-white text-neutral-700" >
                                            {item.company}
                                        </h3>
                                        <div className="text-[10px] text-right" >
                                            <TimeLine startDate={item.start} endDate={item.end} />
                                        </div>
                                    </div>
                                    <div className="text-[10px] sm:text-xs">{item.title}</div>
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
        title: "Frontend Engineer Intern",
        company: "Spinovix Software Pvt. Ltd",
        start: "Jul 2025",
        end: "Present",
    },
    {
        title: "Frontend Engineer Intern",
        company: "Loopins Social",
        start: "Apr 2025",
        end: "Jun 2025",
    },
    {
        title: "Web Developer Intern",
        company: "Unifins IT Hub Pvt. Ltd",
        start: "Dec 2024",
        end: "Apr 2025",
    },
    {
        title: "Full Stack Developer Intern",
        company: "Spinovix Software Pvt. Ltd",
        start: "May 2024",
        end: "Dec 2024",
    },
]