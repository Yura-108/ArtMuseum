import Card from '../Card/Card.tsx';
import './ContainerCards.scss';
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

  return (
    <>
      <SectionTitle h2={'Our special gallery'} h4={'Topics for you'} />
      <Sorting setSortMethod={setSortMethod} />
      {isPending && <CardContainerSkeleton length={MAX_PAGE_PAGINATION} />}
      {!isPending && (
        <div className="containerCards">
          {data.map((artwork: any) => (
            <Card key={artwork.id} artwork={artwork} />
          ))}
        </div>
      )}
      <Pagination activePage={activePage} setActivePage={setActivePage} />
    </>
  );
};

export default ContainerCards;
