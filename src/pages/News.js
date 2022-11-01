import React from 'react';
import PageHead from '../components/PageHead/PageHead';
import { MainContainer } from '../components/Container/Container';

export const News = () => {
  return (
    <>
      <MainContainer>
        <PageHead
          pageTitle="News"
          pageDescription="Here you can find news about the Szarfasz Baszrián Cinematic Universe"
        />
      </MainContainer>
    </>
  );
};
