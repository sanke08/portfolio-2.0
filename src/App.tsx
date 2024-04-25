import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Skills from './components/Skills'
import CanvasContainer from './components/canvas/CharCanvasContainer'
import About from './components/About'
import Projects from './components/Projects'
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { Suspense } from 'react'



gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div id='home' className='h-full flex flex-col  justify-center items-center w-full px-5 xl:px-[130px] snap-y snap-mandatory'>
      <Suspense fallback={<div >Loading...</div>}>
        <div id='character' className=' h-screen w-screen fixed top-0 opacity-50 md:opacity-100 xl:left-0 -z-50'>
          <CanvasContainer />
        </div>
      </Suspense>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

export default App