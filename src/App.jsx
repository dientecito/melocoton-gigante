import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Videos from './pages/Videos';
import Music from './pages/Music';
import Tour from './pages/Tour';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import SplashScreen from './components/SplashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        // Aquí añadimos basename
        <Router basename="/melocoton-gigante">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/music" element={<Music />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/tour" element={<Tour />} />
              <Route path="/merch" element={<div>Tienda</div>} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
