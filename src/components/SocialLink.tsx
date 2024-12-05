import { Github, Linkedin, Mail } from "lucide-react"
import React from "react"

const SocialLink = ({ handleMouseEnter }: { handleMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => void }) => {



    return (
        <div className=" flex gap-x-10 justify-between self-end w-fit z-50">
            <div onMouseEnter={handleMouseEnter}>

                <a href="https://www.linkedin.com/in/sanket-gawande-876a14212" target="_blank" >
                    <Linkedin />
                </a>
            </div>
            <div onMouseEnter={handleMouseEnter}>

                <a href="https://github.com/sanke08?tab=repositories" target="_blank">
                    <Github />
                </a>
            </div>
            <div onMouseEnter={handleMouseEnter}>

                <a href="sanketgawande08@gmail.com">
                    <Mail />
                </a>
            </div>
        </div>
    )
}

export default SocialLink