import React, { useEffect, useState } from "react";
import { Image } from "@nextui-org/react";
import api from '../Api'; 

export default function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const response = await api.get('https://api.themoviedb.org/3/movie/top_rated');
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching top-rated movies:', error);
      }
    };

    fetchTopRatedMovies();
  }, []);

  return (
    <div className="w-full overflow-x-scroll">
      <div className="flex space-x-4" style={{ width: `${movies.length * 300}px` }}>
        {movies.map((movie, index) => (
          <Image
            key={index}
            width={300}
            height={300}
            alt={movie.title}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className="flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}