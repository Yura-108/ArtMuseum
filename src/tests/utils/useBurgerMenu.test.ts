import { renderHook, act } from '@testing-library/react-hooks';
import { fireEvent } from '@testing-library/react';
import useBurgerMenu from '@utils/hooks/useBurgerMenu.ts';

describe('useBurgerMenu', () => {
  it('initially sets isOpen to false', () => {
    const { result } = renderHook(() => useBurgerMenu());

    expect(result.current.isOpen).toBe(false);
  });

  it('toggles isOpen when openMenu and closeMenu are called', () => {
    const { result } = renderHook(() => useBurgerMenu());

    // Open the menu
    act(() => {
      result.current.openMenu();
    });
    expect(result.current.isOpen).toBe(true);

    // Close the menu
    act(() => {
      result.current.closeMenu();
    });
    expect(result.current.isOpen).toBe(false);
  });

  it('closes the menu when Escape key is pressed', () => {
    const { result } = renderHook(() => useBurgerMenu());

    act(() => {
      result.current.openMenu();
    });
    expect(result.current.isOpen).toBe(true);

    act(() => {
      fireEvent.keyDown(document, { key: 'Escape' });
    });
    expect(result.current.isOpen).toBe(false);
  });

  it('closes the menu when clicking outside burger menu and button', () => {
    const { result } = renderHook(() => useBurgerMenu());

    act(() => {
      result.current.openMenu();
    });
    expect(result.current.isOpen).toBe(true);

    // Click outside (simulate clicking outside menu and button)
    const outsideElement = document.createElement('div');
    document.body.appendChild(outsideElement);

    act(() => {
      fireEvent.click(outsideElement);
    });

    expect(result.current.isOpen).toBe(false);
  });

  it('does not close the menu when clicking inside the burger menu or button', () => {
    const { result } = renderHook(() => useBurgerMenu());

    act(() => {
      result.current.openMenu();
    });
    expect(result.current.isOpen).toBe(true);

    // Click inside menu
    const menuElement = document.createElement('div');
    menuElement.classList.add('burgerMenu');
    document.body.appendChild(menuElement);

    act(() => {
      fireEvent.click(menuElement);
    });

    expect(result.current.isOpen).toBe(true);
  });
});
