export const getFromSessionStorage = (key: string) => {
  const data = sessionStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

<<<<<<< HEAD
export const setToSessionStorage = (key: string, value: number[]) => {
=======
export const setToSessionStorage = (key: string, value: any) => {
>>>>>>> main
  sessionStorage.setItem(key, JSON.stringify(value));
};
