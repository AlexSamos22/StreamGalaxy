import react from "react";
import logo from "../assets/images/logo.jpg";

const Footer = () => {
    return (
        <footer className="bg-black text-white dark:bg-gray-900 m-4 w-full">
            <div className="w-11/12 mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between w-full">
                    <div className="flex">
                        <img src={logo} className="w-1/12" alt="Logo"/>
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">StreamGalaxy</span>
                    </div>
                       
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-white sm:text-center dark:text-gray-400">© 2024 Todos los derechos reservados.</span>
            </div>
        </footer>
    );
}

export default Footer;