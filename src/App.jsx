import './App.css'
import MainMenu from './components/MainMenu'
import Footer from './components/Footer'
import Carrusel from './components/CarruselInicio'

function App() {

  return (
    <div className="bg-gray-100 min-h-screen flex items-center flex-col">
      <MainMenu />
      <Carrusel />
      <Footer/>
    </div>
  )
}

export default App
