import Card from '../Card/Card.tsx';
import './ContainerCards.scss';
import Pagination from '../Pagination/Pagination.tsx';
import SectionTitle from '../SectionTitle/SectionTitle.tsx';
import CardContainerSkeleton from '../Skeletons/CardContainerSkeleton.tsx';
import Sorting from '../Sorting/Sorting.tsx';
import { MAX_PAGE_PAGINATION } from '@constants/nums.ts';
import { useQuery } from '@tanstack/react-query';
import { getPage } from '@utils/API/APIFunctions.ts';
import sortArtwork from '@utils/sortArtwork.ts';
import React, { useState } from 'react';
import { SortMethod } from '@types/SortMethod.ts';
import { Artwork } from '@utils/artworkSchema.ts';
import useDebounce from '@utils/hooks/useDebounce.ts';

const ContainerCards: React.FC = () => {
  const [activePage, setActivePage] = useState<number>(0);
  const [sortMethod, setSortMethod] = useState<SortMethod>('title');

  const debouncedPage = useDebounce(activePage, 500);

  const { data, isPending } = useQuery({
    queryKey: ['page', debouncedPage, sortMethod],
    queryFn: () => getPage({ page: debouncedPage }),
    select: (data) => sortArtwork(data, sortMethod),
  });

  const handlePageChange = (page: number) => {
    setActivePage(page);
  };

  return (
    <>
      <SectionTitle h2={'Our special gallery'} h4={'Topics for you'} />
      <Sorting setSortMethod={setSortMethod} />
      {isPending && <CardContainerSkeleton length={MAX_PAGE_PAGINATION} />}
      {!isPending && (
        <div className="containerCards">
          {data?.map((artwork: Artwork) => (
            <Card key={artwork.id} artwork={artwork} />
          ))}
        </div>
      )}
      <Pagination activePage={activePage} setActivePage={handlePageChange} />
    </>
  );
};

export default ContainerCards;
