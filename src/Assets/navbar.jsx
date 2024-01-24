import { Darkmode } from './Darkmode'

export const NavLinks = [
    {
        name: "HOME",
        link: "/#",   
    },
    {
        id: 2,
        name: "PROJECTS",
        link: "/#project",
    },
    {
        id: 1,
        name: "ABOUT",
        link: "/#about",
    },
    {
        id: 1,
        name: "CONTACT",
        link: "/#contact",

    }
]
export function Navbar() {
    return (
        <div className="shadow-md w-full dark:bg-black dark:text-white">
            <div className="container py-2 sm:py-0">
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-3xl font-bold">
                          Portfolio  
                        </span>
                    </div>  

                    <div className=" hidden sm:block">
                        <ul className="flex items-center gap-6">
                            {NavLinks.map(({ id, name, link }) =>
                            (
                                <li key={id}>
                                    <a
                                        className="inline-block text-lg font-medium py-3
                                     hover:text-primary transition-all duration-400" href={link}> {name} </a>
                                </li>
                            ))}
                            <li></li>
                    </ul>
                    </div>
                    <Darkmode />
                </div>
            </div>
        </div>
        
             )
}