import React from 'react';
import './MainPage.scss';
<<<<<<< HEAD
import ContainerCards from '@components/ContainerCards/ContainerCards.tsx';
import RandomGallery from '@components/FandomGallery/RandomGallery.tsx';
import Search from '@components/Search/Search.tsx';
import Title from '@components/Title/Title.tsx';
=======
import Title from '@components/Title/Title.tsx';
import Search from '@components/Search/Search.tsx';
import ContainerCards from '@components/ContainerCards/ContainerCards.tsx';
import RandomGallery from '@components/FandomGallery/RandomGallery.tsx';
>>>>>>> main

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
