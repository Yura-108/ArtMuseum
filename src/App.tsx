import './App.scss';
import Footer from './components/Layout/Footer/Footer.tsx';
import Header from './components/Layout/Header/Header.tsx';
import { HashRouter, Route, Routes } from 'react-router-dom';
import routesConfig from '@utils/routesConfig.tsx';
import { v4 as uuidv4 } from 'uuid';


function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        {routesConfig.map(({ path, element }) => (
          <Route key={uuidv4()} path={path} element={element} />
        ))}
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
