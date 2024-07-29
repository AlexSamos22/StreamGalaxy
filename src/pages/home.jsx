import HeroImage from '../components/HeroImage'
import Tarjetas from '../components/TarjetasHome'

function Home() {
    return (
        <div className='bg-gray-950 flex flex-col items-center justify-center'>
            <HeroImage />
            <Tarjetas
                title={"Top Rated Movies"}
                fetchUrl={"https://api.themoviedb.org/3/movie/top_rated"}
                itemType={"movies"}
            />

            <Tarjetas
                title={"Popular TV Shows"}
                fetchUrl={"https://api.themoviedb.org/3/tv/popular"}
                itemType={"tv shows"}
            />

            <Tarjetas
                title={"Top Rated Movies"}
                fetchUrl={"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&year=2024"}
                itemType={"movies"}
            />

        </div>
    )
}

export default Home