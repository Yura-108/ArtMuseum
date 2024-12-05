import './App.scss';
import Footer from './components/Layout/Footer/Footer.tsx';
import Header from './components/Layout/Header/Header.tsx';
import NotFoundComponent from './pages/404/NotFoundComponent.tsx';
import Artwork from './pages/artwork/Artwork.tsx';
import Favorites from './pages/favorites/Favorites.tsx';
import MainPage from './pages/main/MainPage.tsx';
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path={'/404'} element={<NotFoundComponent />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/artwork/:id" element={<Artwork />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
