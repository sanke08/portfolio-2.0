import Title from "./Title"
import { CssIcon, ExpressIcon, GitIcon, HtmlIcon, JavascriptIcon, MongodbIcon, NextIcon, NodeIcon, PrismalIcon, ReactIcon, TailwindIcon, TypeScriptlIcon } from "../assets/indes"



const Skills = ({skillRef}) => {
  return (
    <div ref={skillRef} className=" transition-all sm:-translate-x-1/2 ease-out sm:opacity-0 mt-4 w-full sm:w-max h-max sticky top-4 duration-1000 border-2 py-5 px-4 rounded-lg">
    <Title>Skills</Title>
    <div className="grid sm:grid-cols-2 grid-cols-5 sm:w-max w-full gap-4">
      {
        skills.map((skill) => (
          <skill.icon key={skill.name} />
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