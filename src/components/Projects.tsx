
const Projects = ({ handleMouseEnter }: { handleMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => void }) => {

    return (
        <div className="min-h-screen md:flex space-y-4 justify-between items-center  py-20 snap-center">
            <p className=" text-2xl w-1/3">PROJECTS</p>
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:w-4/5 w-full gap-8'>
                {
                    items.map((item, index) => (
                        <Card key={index} index={index} item={item} handleMouseEnter={handleMouseEnter} />
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
    handleMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => void
}

const Card = ({ item, handleMouseEnter }: Props) => {


    return (
        <div onMouseEnter={handleMouseEnter} className=" h-fit">
            <a href={`${item.href}`} target="_blank" >
                <div className=' w-full h-full flex flex-col justify-betweenrounded-xl'>
                    {
                        item.img ?
                            <img src={item.img} alt='' className=' sm:h-40 h-48 rounded-xl object-cover bg-black' />
                            :
                            <p className=' h-40 flex justify-center items-center' >
                                {item.desc}
                            </p>
                    }
                    <p className='font-bold text-base'>
                        {item.name}
                    </p>
                    <p className='text-neutral-500 text-sm font-medium'>{item.techs} </p>
                </div>
            </a>
        </div>

    )
}


const items = [
    {
        name: "Companion.ai",
        techs: "Nextjs, PrismaORM , TailwindCSS, Express, Node, Generative Ai",
        href: "https://github.com/sanke08/companion-ai",
        img: "/Images/Images.jpg",
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
