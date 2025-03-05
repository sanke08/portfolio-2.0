

const Intro = () => {


  return (
    <section id="hero">
      <div className="mx-auto w-full space-y-8">
        <div className="flex justify-between gap-2 items-center">
          <div className="flex flex-col flex-1 md:space-y-1.5">
            <p className="inline-block md:text-3xl text-2xl font-bold tracking-tighter sm:text-5xl xl:text-6xl md:pt-4 text-black">
              Hi, I'm Sanket
            </p>
            <p className="inline-block md:text-xl text-lg font-bold tracking-tighter sm:text-2xl xl:text-2xl md:pt-4">
              I build and break at Prod.
            </p>
          </div>
          <p className="flex md:h-28 md:w-28 w-20 h-20 border items-center justify-center rounded-full bg-muted" >
            SG
          </p >
        </div>
      </div>
    </section>
  )
}

export default Intro