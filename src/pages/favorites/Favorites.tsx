import React from 'react';
import favoriteIcon from '@assets/images/favoriteIcon.svg';
import ContainerSmallCards from '@components/ContainerSmallCards/ContainerSmallCard.tsx';
import ErrorMessage from '@components/ErrorMessage/ErrorMessage.tsx';
import Message from '@components/Message/Message.tsx';
import SectionTitle from '@components/SectionTitle/SectionTitle.tsx';
import SmallCardContainerSkeleton from '@components/Skeletons/SmallCardContainerSkeleton.tsx';
import Title from '@components/Title/Title.tsx';
import { useFavoritesContext } from '@store/FavoritesContext.tsx';
import { useQuery } from '@tanstack/react-query';
import { getArtWorks } from '@utils/API/APIFunctions.ts';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary.tsx';

const Favorites: React.FC = () => {
  const { favorites } = useFavoritesContext();
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['page', favorites],
    queryFn: () => getArtWorks(favorites),
  });

  if (isError) return <ErrorMessage>{error.message}</ErrorMessage>;

  return (
    <section>
      <Title>
        here are your <br />
        <div>
          <img src={favoriteIcon} alt="favorite icon" /> <span>Favorites</span>
        </div>
      </Title>
      <SectionTitle h2={'Your favorites list'} h4={'Saved by you'} />
      {isPending ? (
        <SmallCardContainerSkeleton length={favorites.length} />
      ) : data.length ? (
        <ErrorBoundary fallback={<h2>Mistake: failed to load components</h2>}>
          <ContainerSmallCards data={data} />
        </ErrorBoundary>
      ) : (
        <Message>You don't have any favorite artworks yet</Message>
      )}
    </section>
  );
};

export default Favorites;
