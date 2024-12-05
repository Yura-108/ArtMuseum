<<<<<<< HEAD
import ContainerSmallCards from '../ContainerSmallCards/ContainerSmallCard.tsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage.tsx';
import SectionTitle from '../SectionTitle/SectionTitle.tsx';
import SmallCardContainerSkeleton from '../Skeletons/SmallCardContainerSkeleton.tsx';
import { RANDOM_GALLERY_LIMIT } from '@constants/nums.ts';
import { useQuery } from '@tanstack/react-query';
import { getPage } from '@utils/API/APIFunctions.ts';
import React from 'react';
import useRandomPageNumber from '@utils/generatorRandomNumber.ts';

const RandomGallery: React.FC = () => {
  const randomPage = useRandomPageNumber(RANDOM_GALLERY_LIMIT);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['page', randomPage],
    queryFn: () => getPage({ page: randomPage, limit: RANDOM_GALLERY_LIMIT }),
  });

=======
import React, { useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPage } from '../../utils/APIFunctions.ts';
import SectionTitle from '../SectionTitle/SectionTitle.tsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage.tsx';
import ContainerSmallCards from '../ContainerSmallCards/ContainerSmallCard.tsx';
import SmallCardContainerSkeleton from '../Skeletons/SmallCardContainerSkeleton.tsx';
import { RANDOM_GALLERY_LIMIT } from '../../constants/nums.ts';

const RandomGallery: React.FC = () => {
  const refRandNum = useRef<number>(Math.floor(Math.random() * 300) + 1);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['page', refRandNum.current],
    queryFn: () =>
      getPage({ page: refRandNum.current, limit: RANDOM_GALLERY_LIMIT }),
  });
>>>>>>> main
  if (isError) return <ErrorMessage>{error.message}</ErrorMessage>;
  return (
    <>
      <SectionTitle h2={'Other works for you'} h4={'Here some more'} />
      {isPending && (
        <SmallCardContainerSkeleton length={RANDOM_GALLERY_LIMIT} />
      )}
      {!isPending && <ContainerSmallCards data={data} />}
    </>
  );
};
export default RandomGallery;
