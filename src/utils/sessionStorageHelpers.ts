export const getFromSessionStorage = (key: string) => {
  const data = sessionStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

export const setToSessionStorage = (key: string, value: number[]) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};
