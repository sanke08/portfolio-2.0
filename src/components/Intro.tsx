const Intro = () => {
  return (
    <section id="hero">
      <div className="flex justify-between gap-2 items-center">
        <h1 className="inline-block text-2xl lg:text-5xl md:pt-3 font-bold text-black transition-all duration-300 dark:text-neutral-100">
          Hi, I'm Sanket
        </h1>
        <div className="flex size-16 md:size-20 border items-center justify-center rounded-full bg-muted">
          <span className="text-xl font-semibold text-black dark:text-neutral-100">SG</span>
        </div>
      </div>
    </section>
  );
};

export default Intro;
