

const Skills = () => {
  return (

    <section id="skills">
      <div className="flex flex-col gap-y-3">
        <h2 className="text-xl font-bold">Skills</h2>
        <div className="flex flex-wrap gap-1">
          {
            skills.map((skill) => (
              <div key={skill.name} className=" text-xs font-semibold shadow-md rounded-md px-2 py-0.5">
                {skill.name}
              </div>

            ))
          }
        </div>
      </div>

    </section>
  )
}

export default Skills




const skills = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "Javascript" },
  { name: "React" },
  { name: "Nextjs" },
  { name: "Express" },
  { name: "Typescript" },
  { name: "Mongodb" },
  { name: "Node" },
  { name: "git" },
  { name: "Tailwind" },
  { name: "Prisma" },
]