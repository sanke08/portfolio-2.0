import TimeLine from "./TimeLine";

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
];

const Experience = () => {
    return (
        <section id="work" className="">
            <h2 className="text-2xl font-bold text-black dark:text-neutral-100 transition-all duration-300">
                Work Experience
            </h2>
            {data.map((item, i) => (
                <div
                    key={i}
                    className="rounded-lg bg-card text-card-foreground flex items-center py-2 gap-x-3"
                >
                    <div className="flex rounded-full border md:size-10 size-8 justify-center items-center bg-muted text-black dark:text-neutral-100 font-semibold">
                        {item.company[0]}
                    </div>
                    <div className="flex-grow flex flex-col">
                        <div className="flex items-center justify-between gap-x-4">
                            <h3 className="font-semibold text-sm sm:text-base text-neutral-800 dark:text-neutral-200">
                                {item.company}
                            </h3>
                            <div className="text-[10px] sm:text-xs text-neutral-600 dark:text-neutral-400 text-right">
                                <TimeLine startDate={item.start} endDate={item.end} />
                            </div>
                        </div>
                        <div className="text-[11px] sm:text-sm text-neutral-700 dark:text-neutral-300">
                            {item.title}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Experience;
