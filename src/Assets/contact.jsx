export function Contact() {
    return (
        <>
            <span id="contact">

            </span>
        <div className="dark:bg-black dark:text-white pt-10 text-white ">
            <div className="container">
                <div className="grid gird-cols-1 sm:grid-cols-3 gap-6 bg-dark py-8 px-6 ">
                    <div className="col-span-2 space-y-3">
                        <h1 className="text-5xl font-bold text-white">Let's work together on your next project</h1>
                        <p className="text-gray-400">
                            Lorem ipsum dolor sit amet consectitur adipisicing elit Minus porro doloribus provident tenetur pariatur
                        </p>
                    </div>
                    <div className="grid place-items-center">
                        <a href="mailto:"
                        className="inline-block font-semibold py-2 px-6 bg-primary text-white hover:bg-primary/80 duration-200 tracking-widest uppercase">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    </>
    )

}