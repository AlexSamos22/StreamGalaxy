import React, { useEffect, useState } from 'react';
import api from '../Api';

const HeroImage = () => {
    const [movie, setMovies] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await api.get('https://api.themoviedb.org/3/movie/popular');
                const allMovies = response.data.results;
                
                //Seleccionar una pelicula aleatoria
                const randomMovies = getRandomMovies(allMovies);

                // Obtener detalles de la película, incluyendo el tráiler
                const movieDetails = await api.get(`https://api.themoviedb.org/3/movie/${randomMovies.id}`);
                const movieWithDetails = movieDetails.data;
                setMovies(movieWithDetails);
            } catch (error) {
                console.error('Error fetching popular movies:', error);
            }
        };

        fetchMovies();
    }, []);

    // Función para seleccionar una película aleatoria
    const getRandomMovies = (moviesArray) => {
        const randomIndex = Math.floor(Math.random() * moviesArray.length);
        return moviesArray[randomIndex];
    };

    if (!movie) return <div className="text-white">Loading...</div>;

    const imageUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="relative group w-full">
                <img
                    src={imageUrl}
                    alt={movie.title}
                    className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h2 className="text-2xl font-bold">{movie.title}</h2>
                    <p className="text-sm">{movie.overview}</p>
                    <p className="text-xs">Fecha de lanzamiento: {movie.release_date}</p>
                    <p className="text-xs">Calificación: {movie.vote_average} ({movie.vote_count} votos)</p>
                </div>
            </div>
        </div>
    );
};

export default HeroImage;