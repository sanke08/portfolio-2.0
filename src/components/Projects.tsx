import { useEffect, useRef } from "react"
import Title from "./Title"

const Projects = () => {
    const ref = useRef<HTMLDivElement | null>(null)
    const items = [
        {
            name: "Companion.ai",
            techs: "Nextjs, PrismaORM , TailwindCSS, Express, Node, Generative Ai",
            href: "https://github.com/sanke08/companion-ai",
            img: "/Images/Images.png",
            desc: ""
        },
        {
            name: "Music Player",
            techs: "Nextjs, MongoDB , TailwindCSS, Express, Node, Redux",
            href: "https://github.com/sanke08/player.git",
            img: "/Images/4.jpg",
            desc: ""
        },
        {
            name: "Airbnb Clone",
            techs: "Nextjs, MongoDB, React, TailwindCSS, Express",
            href: "https://github.com/sanke08/airbnb-clone",
            img: "/Images/10.jpg",
            desc: ""
        },
        {
            name: "Discord Clone",
            techs: "Nextjs, Prisma, Socket-io, TailwindCSS, Express, Node, Kafka, Redis",
            href: "https://github.com/sanke08/discord-clone.git",
            img: "/Images/3.jpg",
            desc: ""
        },
        {
            name: "Trollo Clone",
            techs: "Nextjs, Prisma, Socket-io, TailwindCSS, Express, Node",
            href: "https://github.com/sanke08/team-work-management/tree/master",
            img: "/Images/5.jpg",
            desc: ""
        },
        {
            name: "Social Media",
            techs: "React, Nextjs, Mongodb, NodeJS,",
            href: "https://github.com/sanke08/Social",
            img: "/Images/8.jpeg",
            desc: ""
        },
        {
            name: "Crypto",
            techs: "React, HTML, CSS, javascript",
            href: " https://github.com/sanke08",
            img: "",
            desc: "Crypto pricing (frontend)",
        },
        {
            name: "Movie api",
            techs: "NodeJS, Express",
            href: " https://github.com/sanke08/movie-api.git",
            img: "",
            desc: "Movie app (backend)"
        },
        {
            name: "Movie ui",
            techs: "React, HTML, CSS, javascript",
            href: "https://github.com/sanke08/movie-frontend-2.0.git",
            desc: "Movie app (frontend)",
            img: "",
        },
    ]

    useEffect(() => {
        const timeout = setTimeout(() => {
            ref.current.style.opacity = "1"
        }, 3000);
        return () => clearTimeout(timeout)
    }, [])


    return (
        <div ref={ref} className=" opacity-0 transition-all mt-4 duration-1000 delay-500 rounded-xl border-2 p-6 py-3">
            <Title>Projects</Title>
            <div className=' w-full grid md:grid-cols-2 gap-5'>
                {
                    items.map((item, index) => (
                        <Card key={index} index={index} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Projects

interface Props {
    item: {
        name: string
        techs: string
        href: string
        img: string
        desc: string
    }
    index: number
}

const Card = ({ item, index }: Props) => {

    const ref = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!ref.current) return
            ref.current.style.opacity = "1"
            ref.current.style.transform = "scale(1) translate(0)"
        }, 3000);
        return () => clearTimeout(timeout);
    }, [index])


    return (
        <a href={`${item.href}`} ref={ref} target="_blank" className=" opacity-0 transition-all translate-y-80 duration-1000 delay-500 scale-[0.1]">
            <div className=' w-full h-full flex flex-col justify-between p-2 rounded-xl'>
                {
                    item.img ?
                        <img src={item.img} alt='' className=' h-40 rounded-xl object-cover bg-black' />
                        :
                        <p className=' h-40 flex justify-center items-center' >
                            {item.desc}
                        </p>
                }
                <p className='font-medium'>
                    {item.name}
                </p>
                <p className=' text-xs text-neutral-700'>{item.techs} </p>
            </div>
        </a>

    )
}