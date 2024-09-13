import { useEffect, useLayoutEffect, useRef } from "react"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import SocialLink from "./components/SocialLink"
import Education from "./components/Education"
import Intro from "./components/Intro"
import About from "./components/About"
import Projects from "./components/Projects"



const App = () => {

  const introRef = useRef<HTMLDivElement | null>(null)
  const skillRef = useRef<HTMLDivElement | null>(null)
  const linkRef = useRef<HTMLDivElement | null>(null)
  const expRef = useRef<HTMLDivElement | null>(null)
  const eduRef = useRef<HTMLDivElement | null>(null)
  const aboutRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    if (!expRef.current || !linkRef.current || !introRef.current) return
    linkRef.current.style.height = `${introRef.current.offsetHeight}px`
    introRef.current.style.left = `50%`
    introRef.current.style.translate = `-50%`
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!introRef.current) return
      introRef.current.style.transform = "scale(1.4)"
    }, 500)


    return () => {
      clearTimeout(timeout)
    }
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!introRef.current || !linkRef.current) return
      introRef.current.style.translate = `0%`
      introRef.current.style.transform = `scale(1)`
      introRef.current.style.top = `0px`
      introRef.current.style.left = `${linkRef.current.offsetWidth + 16}px`
      introRef.current.style.backgroundColor = "rgba(255, 251 ,235, 0.8)"
      introRef.current.style.color = "black"

    }, 2000);
    return () => {
      clearTimeout(timeout)
    }
  }, [])


  useEffect(() => {
    const timeout = setTimeout(() => {
      if (skillRef.current) {
        skillRef.current.style.opacity = "1"
        skillRef.current.style.transform = `translate(0)`
      }
      if (linkRef.current) {

        linkRef.current.style.opacity = "1"
        linkRef.current.style.transform = `translate(0)`
      }
      if (expRef.current) {
        expRef.current.style.transform = "translate(0)"
        expRef.current.style.opacity = "1"
      }
      if (eduRef.current) {
        eduRef.current.style.transform = "translate(0)"
        eduRef.current.style.opacity = "1"
      }
      if (aboutRef.current) {
        aboutRef.current.style.transform = "translate(0)"
        aboutRef.current.style.opacity = "1"
      }
    }, 2700);


    return () => {
      clearTimeout(timeout)
    }
  }, [])




  return (
    <div className="p-3  mx-auto text-neutral-600 bg-amber-50/80">
      <div className=' relative md:flex w-full  sm:w-[768px] mx-auto h-full gap-4'>
        <div className=" w-full">
          <Intro introRef={introRef} />
          <SocialLink linkRef={linkRef} />
          <Experience expRef={expRef} />
          <Projects />
          <div className="sm:hidden block">
            <Skills skillRef={skillRef} />
          </div>
          <About aboutRef={aboutRef} />
          <Education eduRef={eduRef} />
        </div>
        <div className=" hidden sm:block">
          <Skills skillRef={skillRef} />
        </div>
      </div>
    </div>
  )
}

export default App