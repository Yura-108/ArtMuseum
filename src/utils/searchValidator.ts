const validateSearchQuery = (value: string) => {
  return value.replace(/[<>]/g, '').trimStart();
};

export default validateSearchQuery;
