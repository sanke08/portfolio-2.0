

const Intro = () => {


  return (
    <section id="hero">
      <div className="flex justify-between gap-2 items-center">
        <div className="flex flex-col flex-1">
          <p className="inline-block text-2xl lg:text-5xl md:pt-3 font-bold text-black  transition-all duration-300 dark:text-neutral-100">
            Hi, I'm Sanket
          </p>
          <p className="inline-block text-lg lg:text-xl md:mt-2 font-bold">
            I build and break at Prod.
          </p>
        </div>
        <p className="flex size-16 md:size-20 border items-center justify-center rounded-full bg-muted" >
          SG
        </p >
      </div>
    </section>
  )
}

export default Intro