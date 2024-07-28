import React, { useEffect, useState } from 'react';
import api from '../Api';

const MainCarousel = () => {
    const [movie, setMovies] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await api.get('https://api.themoviedb.org/3/movie/popular');
                const allMovies = response.data.results;
                
                //Seleccionar una pelicula aleatoria
                const randomMovies = getRandomMovies(allMovies);

                // Obtener detalles de la película, incluyendo el tráiler
                const movieDetails = await api.get(`https://api.themoviedb.org/3/movie/${randomMovies.id}?append_to_response=videos`);
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

    const trailer = movie.videos?.results?.find(video => video.type === 'Trailer' && video.site === 'YouTube');
    const trailerUrl = trailer ? `https://www.youtube.com/embed/${trailer.key}?vq=hd1080&showinfo=0&modestbranding=1&rel=0` : '';

    return (
        <div className="w-full flex flex-col items-center justify-center">
        <div className="relative group w-full flex items-center justify-center p-2">
            {trailerUrl ? (
                <iframe
                    className="w-11/12 h-screen rounded-lg shadow-lg"
                    src={trailerUrl}
                    frameBorder="0"
                    allowFullScreen
                    title="Movie Trailer"
                />
            ) : (
                <div className="w-full h-screen flex items-center justify-center bg-black text-white">
                    Tráiler no disponible
                </div>
            )}
        </div>
    </div>
    );
};

export default MainCarousel;