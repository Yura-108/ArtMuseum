import './Header.scss';
<<<<<<< HEAD
import burgerIcon from '@assets/images/burgerMenuIcon.svg';
import favoriteIcon from '@assets/images/favoriteIcon.svg';
import logo from '@assets/images/museum-logo.svg';
import useBurgerMenu from '@utils/hooks/useBurgerMenu.ts';
import { Link } from 'react-router-dom';

export default function Header() {
  const { isOpen, openMenu, closeMenu } = useBurgerMenu();
=======
import logo from '@images/museum-logo.svg';
import favoriteIcon from '@images/favoriteIcon.svg';
import burgerIcon from '@images/burgerMenuIcon.svg';
import { Link } from 'react-router-dom';
import useBurgerMenu from '../../../utils/hooks/useBurgerMenu.ts';

export default function Header() {
  const {isOpen, openMenu, closeMenu} = useBurgerMenu();
>>>>>>> main

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
<<<<<<< HEAD
          className={'burgerButton'}
          src={burgerIcon}
=======
          className={"burgerButton"} src={burgerIcon}
>>>>>>> main
          alt="burgerIcon"
        />
        <Link
          to={'/favorites'}
<<<<<<< HEAD
          className={`burgerMenu ${isOpen ? 'open' : ''}`}
        >
=======
          className={`burgerMenu ${isOpen ? 'open' : ''}`}>
>>>>>>> main
          <img src={favoriteIcon} alt="favorite" />
          <span>Your favorites</span>
        </Link>
      </div>
    </header>
  );
}
