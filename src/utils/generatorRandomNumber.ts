import { getNumberOfTotalPages } from '@utils/API/APIFunctions.ts';
import { useQuery } from '@tanstack/react-query';

const generatorRandomNumber = () => {
  const { data } = useQuery({
    queryKey: ['maxPage'],
    queryFn: () => getNumberOfTotalPages(),
  });

  return Math.floor(Math.random() * (data ?? 1)) + 1
}

export default generatorRandomNumber;