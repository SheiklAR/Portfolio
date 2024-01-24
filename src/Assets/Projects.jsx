import web1 from './book-store.jpg'
import web2 from './restaurant.jpg'
import web3 from './cozweb.jpg'
import web4 from './portfolio.jpg'

const ProjectsData = [
    {
        id: 1,
        name: "Online Book Store",
        image: web3,
        link: "#",

    },
    {
        id: 2,
        name: "Restaurant Web page",
        image: web2,
        link: "#",

    },
    {
        id: 3,
        name: "Web Development company",
        image: web4,
        link: "#",
    },
    {
        id: 4,
        name: "Portfolio",
        image: web1,
        link: "#",
    },
]
export function Projects() {
    return (
        <>
            <span id='project'></span>
        <div className="py-14 dark:bg-black dark:text-white">
            <div className="container">
                <header className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="uppercase text-3x1 font-bold">Featured projects</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div>
                        <button className="bg-primary hover:bg-primary/80 duration-300 py-2 px-6 text-white">
                            View all </button>
                    </div>
                </header>
                {/* Card Section */}
                <section>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Cards*/}
                        {
                            ProjectsData.map(({id,name,image,link}) => (
                                <div>
                                    <div className="h-[340px] sm:h-[440px] w-full bg-dark/80 grid place-items-center p-3 sm:p-6">
                                        <img src={image} alt="" />

                                    </div>
                                    <div className="pt-4 space-y-3 ">
                                        <h1 className="text-3xl font-bold">{name}</h1>
                                        <div>
                                            <a href={link}
                                            className="text-primary uppercase">
                                                know more
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                            )
                        }


                    </div>
                </section>
                
            </div>
        </div>
        </>  
    )
}