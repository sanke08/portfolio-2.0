import { Github, Linkedin, Mail } from "lucide-react"
import { LegacyRef } from "react"

const SocialLink = ({ linkRef }:{linkRef:LegacyRef<HTMLDivElement>}) => {
    return (
        <div ref={linkRef} className=" opacity-0 transition-all duration-500 delay-1000 ease-out transform w-max -translate-y-1/4 items-center border-2 grid grid-cols-3 px-6 py-3 gap-4 sm:gap-6 rounded-lg">
            <a href="https://www.linkedin.com/in/sanket-gawande-876a14212" target="_blank" >
                <Linkedin />
            </a>
            <a href="https://github.com/sanke08?tab=repositories" target="_blank">
                <Github />
            </a>
            <a href="sanketgawande08@gmail.com">
                <Mail />
            </a>
        </div>
    )
}

export default SocialLink