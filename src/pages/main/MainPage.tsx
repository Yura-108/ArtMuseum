import React from 'react';
import './MainPage.scss';
import ContainerCards from '@components/ContainerCards/ContainerCards.tsx';
import RandomGallery from '@components/FandomGallery/RandomGallery.tsx';
import Search from '@components/Search/Search.tsx';
import Title from '@components/Title/Title.tsx';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary.tsx';

const MainPage: React.FC = () => {
  return (
    <main id={'main'}>
      <section id="sectionSearch">
        <Title>
          let's find some <span>art</span> <br /> here!
        </Title>
        <Search />
      </section>
      <section>
        <ErrorBoundary
          fallback={<h2>Mistake: the component could not be loaded</h2>}
        >
          <ContainerCards />
        </ErrorBoundary>
      </section>
      <section>
        <ErrorBoundary
          fallback={<h2>Mistake: the component could not be loaded</h2>}
        >
          <RandomGallery />
        </ErrorBoundary>
      </section>
    </main>
  );
};

export default MainPage;
