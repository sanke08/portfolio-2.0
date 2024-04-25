import React from 'react'






const Projects = () => {
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
    ]
    const oItems = [
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
        {
            name: "Social Media",
            techs: "React, Nextjs, Mongodb, NodeJS,",
            href: "https://github.com/sanke08/Social",
            img: "/Images/8.jpeg",
            desc: ""
        },
    ]

    return (
        <div id='projects' className=' w-full  h-screen md:py-20 py-10 hidescrollbar snap-center overflow-scroll '>
            <p className='w-max mx-auto bg-gradient-to-r text-2xl py-10'>My Projects</p>
            <div className=' w-full px-5 md:px-20 grid  md:grid-cols-5 gap-5 py-2 pb-10'>
                {
                    items.map((item, index) => (
                        <Card key={index} index={index} item={item} />
                    ))
                }
            </div>
            <p className='px-5 md:px-20 font-bold'>Basic</p>
            <div className=' w-full px-5 md:px-20 grid md:grid-cols-7 grid-cols-2 gap-5 py-3'>
                {
                    oItems.map((item, index) => (
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

const Card = ({ item, }: Props) => {
    return (
        <a href={`${item.href}`} target="_blank" >
            <div className=' w-full h-full flex flex-col justify-between border border-neutral-400 shadow p-4 rounded-xl  backdrop-blur-lg'>
                {
                    item.img ?
                        <img src={item.img} alt='' className=' h-40 rounded-xl object-cover bg-black' />
                        :
                        <p className=' h-40 flex justify-center items-center' >
                            {item.desc}
                        </p>
                }
                <p className=' text-lg font-medium'>
                    {item.name}
                </p>
                <p className=' text-sm text-neutral-700'>{item.techs} </p>
            </div>
        </a>

    )
}