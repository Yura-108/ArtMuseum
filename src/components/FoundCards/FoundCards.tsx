import ContainerSmallCard from '../ContainerSmallCards/ContainerSmallCard.tsx';
import Message from '../Message/Message.tsx';
import SmallCardContainerSkeleton from '../Skeletons/SmallCardContainerSkeleton.tsx';
import { SEARCH_ITEMS_LIMIT } from '@constants/nums.ts';
import { useQuery } from '@tanstack/react-query';
import { getSearch } from '@utils/API/APIFunctions.ts';
import React from 'react';
import { FoundCardsProps } from '@types/componentsPropsTypes.ts';



const FoundCards: React.FC<FoundCardsProps> = ({ debouncedQuery }) => {
  if (debouncedQuery.length <= 0) return;

  const { data, isPending } = useQuery({
    queryKey: ['search', debouncedQuery],
    queryFn: () => getSearch({ q: debouncedQuery, size: SEARCH_ITEMS_LIMIT }),
  });
  if (isPending)
    return <SmallCardContainerSkeleton length={SEARCH_ITEMS_LIMIT} />;
  if (data?.length === 0) return <Message>Nothing was found!</Message>;

  return <ContainerSmallCard data={data} />;
};

export default FoundCards;
