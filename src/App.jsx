import './App.css'
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainMenu from './components/MainMenu'
import Footer from './components/Footer'
import Home from './pages/home';
import Peliculas from './pages/peliculas';
import Series from './pages/series';

function App() {
  return (
    <NextUIProvider>
      <Router>
        <MainMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/peliculas" element={<Peliculas />} />
          <Route path="/series" element={<Series />} />
        </Routes>
        <Footer />
      </Router>
    </NextUIProvider>

  );

}

export default App
