import About from "./components/About"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Intro from "./components/Intro"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

const App = () => {

  return (
    <main className=" flex flex-col min-h-[100dvh] space-y-10 pt-10 pb-20 h-full w-full text-neutral-700 max-w-3xl mx-auto px-4">
      <Intro />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <div className=" flex gap-x-4 border-2 border-neutral-300 w-fit p-2 px-4 rounded-full items-center fixed bottom-6 left-1/2 -translate-x-1/2 backdrop-blur-sm">
        <div className=" flex justify-center w-7 h-7 p-1 hover:w-10 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" className=" w-5 h-5 transition-all " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
        </div>
        <div className=" flex justify-center w-7 h-7 p-1 hover:w-10 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" className=" w-5 h-5 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
        </div>
        <div className=" flex justify-center w-7 h-7 p-1 hover:w-10 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" className=" w-5 h-5 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
        </div>
      </div>
    </main>
  )
}

export default App