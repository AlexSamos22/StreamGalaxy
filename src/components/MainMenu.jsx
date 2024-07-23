import react from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const MainMenu = () => {
    return (
        <nav className="bg-black w-full flex justify-center">
            <div className='w-11/12 flex flex-col items-center justify-center p-3'>
                <div className='w-full flex justify-between'>
                    <div className='flex items-center text-lightGray'>
                        <img className='w-1/12' src={logo} alt="Ironhack logo" />
                        <span className='text-xl'>StreamGalaxy</span>
                    </div>
                    <ul className='flex justify-center items-center text-lightGray'>
                    <li className='px-4'>
                            <Link to="/">Home</Link> {/* Link a Home */}
                        </li>
                        <li className='px-4'>
                            <Link to="/peliculas">Peliculas</Link> {/* Link a About */}
                        </li>
                        <li className='px-4'>
                            <Link to="/series">Series</Link> {/* Link a Contact */}
                        </li>
                    </ul>
                </div>
                <div className='w-full flex justify-center items-center p-2'>
                    <div className='w-full flex justify-center items-center relative'>
                        <div className='flex justify-between items-center w-full bg-gray-800 p-1 text-lightGray rounded-full'>
                            <input className='w-full bg-transparent outline-none border-none shadow-none ml-3 input-no-focus ' type="text" placeholder="Buscar..." />
                            <button className='cursor-pointer'>
                                <FontAwesomeIcon icon={faSearch} className='text-lightGray mr-3' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </nav>
    );
};

export default MainMenu;