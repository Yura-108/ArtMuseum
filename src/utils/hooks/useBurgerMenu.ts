import { useCallback, useEffect, useState } from 'react';

const useBurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') closeMenu();
  }, []);

  const handleClickOutside = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
<<<<<<< HEAD
    if (!target.closest('.burgerMenu') && !target.closest('.burgerButton')) {
=======
    if (!target.closest(".burgerMenu") && !target.closest(".burgerButton")) {
>>>>>>> main
      closeMenu();
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
<<<<<<< HEAD
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
=======
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
>>>>>>> main
    };
  }, [isOpen, handleKeyDown, handleClickOutside]);

  return { isOpen, openMenu, closeMenu };
<<<<<<< HEAD
};

export default useBurgerMenu;
=======
}

export default useBurgerMenu;
>>>>>>> main
