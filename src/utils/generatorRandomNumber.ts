import { getNumberOfTotalPages } from '@utils/API/APIFunctions.ts';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

function getRandomNumber(num: number) {
  return Math.floor(Math.random() * num) + 1;
}

const useRandomPageNumber = (limit: number) => {
  const { data: maxPage = 1 } = useQuery({
    queryKey: ['maxPage', limit],
    queryFn: () => getNumberOfTotalPages({ limit: limit }),
    initialData: 1,
  });

  const [randomPage, setRandomPage] = useState<number>(() =>
    getRandomNumber(maxPage),
  );

  useEffect(() => {
    if (maxPage > 1) {
      setRandomPage(getRandomNumber(maxPage));
    }
  }, [maxPage]);

  return randomPage;
};

export default useRandomPageNumber;
