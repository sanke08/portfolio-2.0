
import { useLayoutEffect } from "react"
import { HtmlIcon, CssIcon, JavascriptIcon, TailwindIcon, ReactIcon, NodeIcon, NextIcon, PrismalIcon, MongodbIcon, ExpressIcon, TypeScriptlIcon, GitIcon } from "../assets/indes"
import gsap from "gsap"


const Skills = () => {



    const frontend = [
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
    const tl = gsap.timeline()

    useLayoutEffect(() => {
        tl.to("#skillcontainer", {
            opacity: 1,
            transition: "0.2s",
            translateY: 0,
            scrollTrigger: {
                trigger: "#skills",
                start: "top 10%",
                end: "top top",
                immediateRender: false,
                scrub: true,
            }
        })
    }, [tl])



    return (
        <div id='skills' className=' w-full h-screen flex overflow-hidden  md:pt-40 pt-20 justify-end snap-center'>
            <div id="skillcontainer" className=" -translate-y-[20rem] h-max w-[60%] opacity-0">
                <p className='w-max mx-auto text-3xl font-medium py-10'>My Skills</p>
                <div className='  grid-cols-7 gap-x-20 gap-y-10 px-40 w-full pb-10 hidden xl:grid'>
                    {
                        frontend.map((skill) => (
                            <div key={skill.name} className='p-2 w-max h-max px-4 text-center'>
                                <skill.icon />
                            </div>
                        ))
                    }
                </div>
                <div className='grid grid-cols-2 w-full h-full xl:hidden'>
                    {
                        frontend.map((skill, i) => (
                            <div key={i} className='p-1 w-[5rem] h-[5rem] flex justify-center items-center px-2 text-center'>
                                <skill.icon />
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>

    )
}

export default Skills