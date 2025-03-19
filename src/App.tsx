import About from "./components/About"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Floating from "./components/Floating"
import Intro from "./components/Intro"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

const App = () => {

  return (
    <main className=" min-h-[100dvh]  text-neutral-700 dark:text-neutral-300 bg-neutral-300 dark:bg-neutral-950  transition-all duration-300">
      <div className="flex flex-col space-y-6 pt-4 pb-20 h-full w-full max-w-2xl mx-auto px-4">
        <Intro />
        <About />
        <Experience />
        <Education />
        <Projects />

        <Skills />
      </div>
      <Floating />
    </main>
  )
}

export default App