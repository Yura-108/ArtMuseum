import React from 'react';
import './MainPage.scss';
import ContainerCards from '@components/ContainerCards/ContainerCards.tsx';
import RandomGallery from '@components/FandomGallery/RandomGallery.tsx';
import Search from '@components/Search/Search.tsx';
import Title from '@components/Title/Title.tsx';

const MainPage: React.FC = () => {
  return (
    <section id={'main'}>
      <Title>
        let's find some <span>art</span> <br /> here!
      </Title>
      <Search />
      <ContainerCards />
      <RandomGallery />
    </section>
  );
};

export default MainPage;
