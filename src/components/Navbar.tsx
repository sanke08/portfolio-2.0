


const Navbar = () => {

    const routes = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "/#skills" },
        // { name: "Contact", href: "/#contact" },
    ]



    return (
        <div className='lg:px-[200px] px-5 flex w-full items-center fixed z-50 left-0 top-0 backdrop-blur-md justify-between py-4'>
            <a href="/">
                <h1 className=' text-3xl'>
                    S.Gawande
                </h1>
            </a>
            <div className='gap-20 hidden md:flex'>
                {
                    routes.map((route, index) => (
                        <button key={index} className=' text-lg transition-all duration-500'>
                            <a href={route.href} >
                                {route.name}
                            </a>
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default Navbar