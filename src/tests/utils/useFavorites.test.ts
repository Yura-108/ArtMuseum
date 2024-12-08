import { renderHook, act } from '@testing-library/react-hooks';
import { getFromSessionStorage, setToSessionStorage,
} from '@utils/sessionStorageHelpers.ts';
import { FAVORITES_STORAGE_KEY } from '@constants/storageKeys.ts';
import { useFavorites } from '@utils/hooks/useFavorites.ts';

jest.mock('@utils/sessionStorageHelpers.ts', () => ({
  getFromSessionStorage: jest.fn(),
  setToSessionStorage: jest.fn(),
}));

describe('useFavorites', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('initializes favorites from session storage', () => {
    (getFromSessionStorage as jest.Mock).mockReturnValue([1, 2, 3]);

    const { result } = renderHook(() => useFavorites());

    expect(result.current.favorites).toEqual([1, 2, 3]);
    expect(getFromSessionStorage).toHaveBeenCalledWith(FAVORITES_STORAGE_KEY);
  });

  it('adds an item to favorites', () => {
    (getFromSessionStorage as jest.Mock).mockReturnValue([]);

    const { result } = renderHook(() => useFavorites());

    act(() => {
      result.current.addToFavorites(4);
    });

    expect(result.current.favorites).toEqual([4]);
    expect(setToSessionStorage).toHaveBeenCalledWith(FAVORITES_STORAGE_KEY, [4]);
  });

  it('does not add duplicate items to favorites', () => {
    (getFromSessionStorage as jest.Mock).mockReturnValue([1]);

    const { result } = renderHook(() => useFavorites());

    act(() => {
      result.current.addToFavorites(1);
    });

    expect(result.current.favorites).toEqual([1]);
    expect(setToSessionStorage).toHaveBeenCalledWith(FAVORITES_STORAGE_KEY, [1]);
  });

  it('removes an item from favorites', () => {
    (getFromSessionStorage as jest.Mock).mockReturnValue([1, 2, 3]);

    const { result } = renderHook(() => useFavorites());

    act(() => {
      result.current.removeFromFavorites(2);
    });

    expect(result.current.favorites).toEqual([1, 3]);
    expect(setToSessionStorage).toHaveBeenCalledWith(FAVORITES_STORAGE_KEY, [1, 3]);
  });

  it('checks if an item is in favorites', () => {
    (getFromSessionStorage as jest.Mock).mockReturnValue([1, 2, 3]);

    const { result } = renderHook(() => useFavorites());

    expect(result.current.isFavorite(2)).toBe(true);
    expect(result.current.isFavorite(4)).toBe(false);
  });

  it('saves favorites to session storage when favorites change', () => {
    (getFromSessionStorage as jest.Mock).mockReturnValue([]);

    const { result } = renderHook(() => useFavorites());

    act(() => {
      result.current.addToFavorites(5);
    });

    expect(setToSessionStorage).toHaveBeenCalledWith(FAVORITES_STORAGE_KEY, [5]);

    act(() => {
      result.current.removeFromFavorites(5);
    });

    expect(setToSessionStorage).toHaveBeenCalledWith(FAVORITES_STORAGE_KEY, []);
  });
});
