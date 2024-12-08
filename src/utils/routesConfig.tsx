import MainPage from '@pages/main/MainPage.tsx';
import NotFoundComponent from '@pages/404/NotFoundComponent.tsx';
import Favorites from '@pages/favorites/Favorites.tsx';
import Artwork from '@pages/artwork/Artwork.tsx';


const routesConfig = [
  { path: '/', element: <MainPage /> },
  { path: '/404', element: <NotFoundComponent /> },
  { path: '/favorites', element: <Favorites /> },
  { path: '/artwork/:id', element: <Artwork /> },
];

export default routesConfig;