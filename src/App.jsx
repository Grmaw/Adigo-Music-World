import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MusicPage from './pages/MusicPage';
import VideosPage from './pages/VideosPage';
import ShowsPage from './pages/ShowsPage';
import StorePage from './pages/StorePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/music" element={<MusicPage />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/shows" element={<ShowsPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/store/:productId" element={<ProductDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
