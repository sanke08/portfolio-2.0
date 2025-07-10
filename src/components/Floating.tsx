import { useState, useEffect } from "react";

const Floating = () => {

    const [bluring, setBluring] = useState(false)
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    const handle = () => {
        setBluring(true)
        setDarkMode((pre) => !pre)

        setTimeout(() => {
            setBluring(false)
        }, 300);
    }
    return (
        <>
            <div className={`w-full h-screen fixed top-0 left-0 dark:bg-white/10 bg-black/10 transition-all  ${bluring ? "backdrop-blur-sm z-20" : "-z-20"} `} />

            <div className=" flex gap-x-4 border-2 border-neutral-400   dark:border-neutral-500 transition-all duration-300 w-fit p-2 px-4 rounded-full items-center fixed bottom-6 left-1/2 -translate-x-1/2 backdrop-blur">
                <div className=" flex justify-center w-7 h-7 p-1 transition-all">
                    <a href="https://www.linkedin.com/in/sanket-gawande-876a14212/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" className=" w-5 h-5 transition-all text-neutral-700 dark:text-neutral-300  " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                    </a>
                </div>
                <div className=" flex justify-center w-7 h-7 p-1 transition-all">
                    <a href="https://github.com/sanke08?tab=repositories" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" className=" w-5 h-5 transition-all text-neutral-700 dark:text-neutral-300 " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                    </a>
                </div>
                <div className=" flex justify-center w-7 h-7 p-1 transition-all">
                    <a href="mailto:sanketgawande08@gmail.com" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" className=" w-5 h-5 transition-all text-neutral-700 dark:text-neutral-300 " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                    </a>
                </div>
                <div className=" h-5 w-[1px]  transition-all duration-300 dark:bg-neutral-200 bg-neutral-900" />


                <button
                    onClick={() => handle()}
                    className="rounded-full transition-all duration-300  flex justify-center w-7 h-7 p-1"
                >
                    {darkMode ?
                        <svg xmlns="http://www.w3.org/2000/svg" className=" w-5 h-5 transition-all text-neutral-700 dark:text-neutral-300 " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" className=" w-5 h-5 transition-all text-neutral-700 dark:text-neutral-300 " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
                    }
                </button>


            </div>

        </>
    )
}

export default Floating

