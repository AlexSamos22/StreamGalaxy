import React, { useEffect, useState, useRef } from "react";
import api from '../Api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const TarjetasHome = ({ title, fetchUrl, itemType }) => {
  const [item, setMovies] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const response = await api.get(fetchUrl);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching top-rated movies:', error);
      }
    };

    fetchTopRatedMovies();
  }, [fetchUrl, itemType]);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      top: 0,
      left: -300,
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      top: 0,
      left: 300,
      behavior: 'smooth'
    });
  };

  return (
    <div className="w-11/12 overflow-hidden mt-5 mb-5 flex flex-col items-center justify-center relative">
      <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
      <div className="relative w-full flex items-center">
        <button
          onClick={scrollLeft}
          className="absolute left-0 z-10 bg-gray-800 bg-opacity-70 text-white p-2 rounded-full focus:outline-none hover:bg-opacity-90 transition"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div ref={carouselRef} className="flex space-x-4 overflow-x-scroll scrollbar-hide" style={{ scrollSnapType: 'x mandatory' }}>
          {item.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 h-96 relative border-2 border-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-2xl"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="w-full h-full overflow-hidden">
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title || item.name}
                  className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-bold">{item.title || item.name}</h3>
                <p className="text-xs mt-1">{item.overview.substring(0, 60)}...</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 z-10 bg-gray-800 bg-opacity-70 text-white p-2 rounded-full focus:outline-none hover:bg-opacity-90 transition"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );

};

export default TarjetasHome;