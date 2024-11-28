import './App.scss';
import Header from './components/Layout/Header/Header.tsx';
import Footer from './components/Layout/Footer/Footer.tsx';
import MainPage from './pages/main/MainPage.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Artwork from './pages/artwork/Artwork.tsx';
import NotFoundComponent from './pages/404/NotFoundComponent.tsx';
import Favorites from './pages/favorites/Favorites.tsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path={'/404'} element={<NotFoundComponent />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/artwork/:id" element={<Artwork />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
