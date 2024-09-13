import { LegacyRef } from "react"

const Intro = ({ introRef }:{introRef:LegacyRef<HTMLDivElement>}) => {
  return (
    <div ref={introRef} className=" transition-all scale-[0.01] duration-1000 ease-out top-[40vh] left-1/2 bg-neutral-800 text-white border-2 px-6 p-3 border-neutral-500 rounded-lg w-fit absolute">
      <p className="  w-max md:text-2xl text-xl">Sanket Gawande</p> 
      <p className=" w-max text-sm font-semibold">MERN stack developer</p>
    </div>
  )
}

export default Intro