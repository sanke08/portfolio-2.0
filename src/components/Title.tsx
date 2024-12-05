import { twMerge } from "tailwind-merge"


const Title = ({ children ,className}: { children: React.ReactNode,className?:string }) => {
    return (
        <p className={twMerge(" text-2xl w-1/3",className)}>
            {children}
        </p>
    )
}

export default Title
