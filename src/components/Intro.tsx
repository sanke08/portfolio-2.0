import SocialLink from "./SocialLink"
import Title from "./Title"

const Intro = ({ handleMouseEnter }: { handleMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => void }) => {


  return (
    <div className=" h-screen w-full py-20 snap-center">
      <div className=" flex justify-end flex-col h-1/2">
        <Title className={" min-w-max"}>SANKET GAWANDE</Title>
        <p> <span onMouseEnter={handleMouseEnter} className=" border-b border-rose-400 z-50">MERN</span> Stack Developer</p>
      </div>
      <div className=" h-1/2 w-full flex justify-end">
      <SocialLink handleMouseEnter={handleMouseEnter} />
      </div>
    </div>
  )
}

export default Intro