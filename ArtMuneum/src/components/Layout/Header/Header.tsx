import './Header.scss';
import logo from '@images/museum-logo.svg';
import favoriteIcon from '@images/favoriteIcon.svg';
import burgerIcon from '@images/burgerMenuIcon.svg';
import { Link } from 'react-router-dom';
import useBurgerMenu from '../../../utils/hooks/useBurgerMenu.ts';

export default function Header() {
  const {isOpen, openMenu, closeMenu} = useBurgerMenu();

  return (
    <header>
      <div className="container">
        <Link to={'/'}>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <img
          onClick={isOpen ? closeMenu : openMenu}
          className={"burgerButton"} src={burgerIcon}
          alt="burgerIcon"
        />
        <Link
          to={'/favorites'}
          className={`burgerMenu ${isOpen ? 'open' : ''}`}>
          <img src={favoriteIcon} alt="favorite" />
          <span>Your favorites</span>
        </Link>
      </div>
    </header>
  );
}
