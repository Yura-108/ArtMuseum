import Card from '../Card/Card.tsx';
import './ContainerCards.scss';
<<<<<<< HEAD
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

=======
import React, { useState } from 'react';
import { getPage } from '@utils/APIFunctions.ts';
import SectionTitle from '../SectionTitle/SectionTitle.tsx';
import Pagination from '../Pagination/Pagination.tsx';
import { useQuery } from '@tanstack/react-query';
import CardContainerSkeleton from '../Skeletons/CardContainerSkeleton.tsx';
import { MAX_PAGE_PAGINATION } from '@constants/nums.ts';
import Sorting from '../Sorting/Sorting.tsx';
import sortArtwork from '@utils/sortArtwork.ts';
import { SortMethod } from '../../type/types.ts';

interface Props {
  activePage: number;
  sortMethod: number;
}

const ContainerCards: React.FC<Props> = () => {
  const [activePage, setActivePage] = useState<number>(0);
  const [sortMethod, setSortMethod] = useState<SortMethod>('title');

  const { data, isPending } = useQuery({
    queryKey: ['page', activePage],
    queryFn: () => getPage({ page: activePage }),
    select: (data) => sortArtwork(data, sortMethod),
  });

>>>>>>> main
  return (
    <>
      <SectionTitle h2={'Our special gallery'} h4={'Topics for you'} />
      <Sorting setSortMethod={setSortMethod} />
      {isPending && <CardContainerSkeleton length={MAX_PAGE_PAGINATION} />}
      {!isPending && (
        <div className="containerCards">
<<<<<<< HEAD
          {data?.map((artwork: Artwork) => (
=======
          {data.map((artwork: any) => (
>>>>>>> main
            <Card key={artwork.id} artwork={artwork} />
          ))}
        </div>
      )}
<<<<<<< HEAD
      <Pagination activePage={activePage} setActivePage={handlePageChange} />
=======
      <Pagination activePage={activePage} setActivePage={setActivePage} />
>>>>>>> main
    </>
  );
};

export default ContainerCards;
