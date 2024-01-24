import { NavLinks } from "./navbar";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export function Footer() {
    return (
        <div className="dark:bg-black text-white dark:text-white py-14">
            <nav className="container">
                <ul className="flex items-center justify-center gap-6 ">
                    {
                        NavLinks.map(({ id, name, link }) =>
                        (
                            <li key={id}>
                                <a href={link}>{name}</a>
                            </li>
                        ))
                    }
                </ul>
                
            </nav>
            {/* Footer icons */}
            <section className="bg-dark conatainer ">
                <div className="mt-10 p-6 flex items-center justify-between gap-6">
                    <h1 className="text-2xl">Portfolio</h1>
                    <div className="flex gap-6">
                    <FaFacebook className="text-2xl text-white/60 hover:text-primary cursor-pointer duration-300" />
                    <FaInstagram className="text-2xl text-white/60 hover:text-primary cursor-pointer duration-300" />
                    <FaYoutube className="text-2xl text-white/60 hover:text-primary cursor-pointer duration-300" />
                    </div>
                    <div className="hidden sm:block ">❤️ by SHEIK ABDUL RAHMAN

                    </div>
                </div>

            </section>
        </div>
    )
}