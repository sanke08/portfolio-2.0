import { useRef } from "react";
import Intro from "./components/Intro"
import AnimateBall from "./components/AnimateBall";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";


const App = () => {


  const ballRef = useRef<HTMLDivElement | null>(null)

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ballRef.current) return
    ballRef.current.style.left = `${e.currentTarget.offsetLeft - 6}px`
    ballRef.current.style.top = `${e.currentTarget.offsetTop - 6}px`
    ballRef.current.style.width = `${e.currentTarget.offsetWidth + 12}px`
    ballRef.current.style.height = `${e.currentTarget.offsetHeight + 12}px`
    ballRef.current.style.transform = "scale(1)"
  }




  return (
    <div className=" h-full w-full text-neutral-700 md:px-60 px-6">
      <AnimateBall ref={ballRef} />
      <Intro handleMouseEnter={handleMouseEnter} />
      <Skills handleMouseEnter={handleMouseEnter} />
      <Experience handleMouseEnter={handleMouseEnter} />
      <Projects handleMouseEnter={handleMouseEnter} />
      <Education handleMouseEnter={handleMouseEnter} />
    </div>
  )
}

export default App