import TimeLine from "./TimeLine";

const Edu = [
    {
        field: "B.Tech Computer Science and Engineering",
        college: "Tulsiramji Gaikwad-Patil College of Engineering and Technology",
        marks: "8.4 CGPA",
        startDate: "2022",
        endDate: "Present",
    },
    {
        field: "HSC",
        college: "Sevasadan Jr. College",
        marks: "67%",
        startDate: "2020",
        endDate: "2022",
    },
    {
        field: "SSC",
        college: "Somalwar High School, Khamla",
        marks: "92%",
        startDate: "2010",
        endDate: "2020",
    },
];

const Education = () => {
    return (
        <section id="education" >
            <h2 className="text-2xl font-bold text-black dark:text-neutral-100 transition-all duration-300">
                Education
            </h2>
            {Edu.map((item, i) => (
                <div
                    className="rounded-lg bg-card text-card-foreground flex items-center py-2 gap-x-3"
                    key={i}
                >
                    <div
                        className="md:size-10 size-8 aspect-square border rounded-full flex justify-center items-center bg-muted text-black dark:text-neutral-100 font-semibold"
                        aria-hidden="true"
                    >
                        {item.college[0]}
                    </div>
                    <div className="flex-grow flex flex-col">
                        <div className="flex items-center justify-between gap-x-4">
                            <h3 className="font-semibold text-sm sm:text-base text-neutral-800 dark:text-neutral-200">
                                {item.college}
                            </h3>
                            <div className="text-[10px] sm:text-xs text-neutral-600 dark:text-neutral-400 text-right">
                                <TimeLine
                                    startDate={item.startDate}
                                    endDate={item.endDate}
                                />
                            </div>
                        </div>
                        <div className="text-[11px] sm:text-sm text-neutral-700 dark:text-neutral-300 mt-0.5">
                            {item.field} · {item.marks}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Education;
