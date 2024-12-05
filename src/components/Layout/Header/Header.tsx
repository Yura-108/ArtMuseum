import './Header.scss';
import burgerIcon from '@assets/images/burgerMenuIcon.svg';
import favoriteIcon from '@assets/images/favoriteIcon.svg';
import logo from '@assets/images/museum-logo.svg';
import useBurgerMenu from '@utils/hooks/useBurgerMenu.ts';
import { Link } from 'react-router-dom';

export default function Header() {
  const { isOpen, openMenu, closeMenu } = useBurgerMenu();

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
          className={'burgerButton'}
          src={burgerIcon}
          alt="burgerIcon"
        />
        <Link
          to={'/favorites'}
          className={`burgerMenu ${isOpen ? 'open' : ''}`}
        >
          <img src={favoriteIcon} alt="favorite" />
          <span>Your favorites</span>
        </Link>
      </div>
    </header>
  );
}
