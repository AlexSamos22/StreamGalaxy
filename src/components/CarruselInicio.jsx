import React, { useEffect, useState } from 'react';
import api from '../Api';

const MainCarousel = () => {
    const [movies, setMovies] = useState([]);
    const [displayMovies, setDisplayMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await api.get('https://api.themoviedb.org/3/movie/popular');
                const allMovies = response.data.results;
                
                // Seleccionar 4 películas aleatorias
                const randomMovies = getRandomMovies(allMovies, 4);
                setMovies(allMovies);
                setDisplayMovies(randomMovies);
            } catch (error) {
                console.error('Error fetching popular movies:', error);
            }
        };

        fetchMovies();
    }, []);

    // Función para seleccionar un número específico de películas aleatorias
    const getRandomMovies = (moviesArray, num) => {
        const shuffled = [...moviesArray].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    };

    return (
        <div className="w-full p-4 flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-4 text-lightGray">Novedades en películas</h1>
            <div className="grid grid-cols-4 gap-4 w-full">
                {displayMovies.map((movie, index) => (
                    <img
                        key={index}
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-auto object-cover"
                    />
                ))}
            </div>
        </div>
    );
};

export default MainCarousel;
