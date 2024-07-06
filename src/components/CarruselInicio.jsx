import React, { useEffect, useState } from 'react';
import api from '../Api';

const PopularMovies = () => {
    const [movies, setMovies] = useState([]);
    const [imageUrl1, setImageUrl1] = useState('');
    const [imageUrl2, setImageUrl2] = useState('');
    const [imageUrl3, setImageUrl3] = useState('');
    const [imageUrl4, setImageUrl4] = useState('');
    const [imageUrl5, setImageUrl5] = useState('');

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await api.get('https://api.themoviedb.org/3/movie/popular');
                setMovies(response.data.results);
            } catch (error) {
                console.error('Error fetching popular movies:', error);
            }
        };

        fetchMovies();
    }, []);

    useEffect(() => {
        // Asignamos las URLs de las imágenes a las variables individuales
        if (movies.length >= 5) {
            setImageUrl1(`https://image.tmdb.org/t/p/w500${movies[0].poster_path}`);
            setImageUrl2(`https://image.tmdb.org/t/p/w500${movies[1].poster_path}`);
            setImageUrl3(`https://image.tmdb.org/t/p/w500${movies[2].poster_path}`);
            setImageUrl4(`https://image.tmdb.org/t/p/w500${movies[3].poster_path}`);
            setImageUrl5(`https://image.tmdb.org/t/p/w500${movies[4].poster_path}`);
        }
    }, [movies]);

    // Renderizado del componente
    return (
        <div id="default-carousel" className="relative w-full" dataCarousel="slide">
            <div className="relative h-96 overflow-hidden rounded-lg">
                <div className="duration-700 ease-in-out block" dataCarouselItem>
                    <img src={imageUrl1} className="absolute block w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="Slide 1" />
                </div>
                <div className="duration-700 ease-in-out hidden" dataCarouselItem>
                    <img src={imageUrl2} className="absolute block w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="Slide 2" />
                </div>
                <div className="duration-700 ease-in-out hidden" dataCarouselItem>
                    <img src={imageUrl3} className="absolute block w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="Slide 3" />
                </div>
                <div className="duration-700 ease-in-out hidden" dataCarouselItem>
                    <img src={imageUrl4} className="absolute block w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="Slide 4" />
                </div>
                <div className="duration-700 ease-in-out hidden" dataCarouselItem>
                    <img src={imageUrl5} className="absolute block w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="Slide 5" />
                </div>
            </div>

            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                <button type="button" className="w-3 h-3 rounded-full bg-blue-500" ariaCurrent="true" ariaLabel="Slide 1" DataCarouselSlideTo="0"></button>
                <button type="button" className="w-3 h-3 rounded-full bg-gray-200" ariaCurrent="false" ariaLabel="Slide 2" DataCarouselSlideTo="1"></button>
                <button type="button" className="w-3 h-3 rounded-full bg-gray-200" ariaCurrent="false" ariaLabel="Slide 3" DataCarouselSlideTo="2"></button>
                <button type="button" className="w-3 h-3 rounded-full bg-gray-200" ariaCurrent="false" ariaLabel="Slide 4" DataCarouselSlideTo="3"></button>
                <button type="button" className="w-3 h-3 rounded-full bg-gray-200" ariaCurrent="false" ariaLabel="Slide 5" DataCarouselSlideTo="4"></button>
            </div>

            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" DataCarouselPrev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" dataCarouselNext>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};

export default PopularMovies;
