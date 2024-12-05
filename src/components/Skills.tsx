
import { CssIcon, ExpressIcon, GitIcon, HtmlIcon, JavascriptIcon, MongodbIcon, NextIcon, NodeIcon, PrismalIcon, ReactIcon, TailwindIcon, TypeScriptlIcon } from "../assets/indes"




const Skills = ({ handleMouseEnter }: { handleMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => void }) => {
  return (
    <div className="sm:min-h-[70vh] min-h-[80vh] sm:flex space-y-4 justify-between items-center snap-center">
      <p className=" align-middle text-2xl w-1/3">SKILLS</p>
      <div className=" sm:w-3/4 w-full h-fit gap-y-16 grid grid-cols-3 md:grid-cols-5 ">
        {
          skills.map((skill) => (
            <div key={skill.name} onMouseEnter={handleMouseEnter} className=" w-fit h-fit">
              <skill.icon />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Skills




const skills = [
  { name: "HTML", icon: HtmlIcon },
  { name: "CSS", icon: CssIcon },
  { name: "Javascript", icon: JavascriptIcon },
  { name: "React", icon: ReactIcon },
  { name: "Nextjs", icon: NextIcon },
  { name: "Express", icon: ExpressIcon },
  { name: "Typescript", icon: TypeScriptlIcon },
  { name: "Mongodb", icon: MongodbIcon },
  { name: "Node", icon: NodeIcon },
  { name: "git", icon: GitIcon },
  { name: "Tailwind", icon: TailwindIcon },
  { name: "Prisma", icon: PrismalIcon },
]