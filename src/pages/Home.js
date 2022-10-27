import React from 'react';
import Hero from '../components/Hero/Hero';
import Block from '../components/Block/Block';
import Card from '../components/Card/Card';

export const Home = () => {
  return (
    <>
      <Hero mainTitle="Official Farkas Adrián Fan Club" subTitle="R.I.P. LUXXXI 2022.07.25 - 2022.10.17"></Hero>
      <Block blockTitle="Social media">
        <a href="https://www.reddit.com/r/FarkasAdrianFanClub" target="_blank">
          <Card
            socialIcon="https://www.redditinc.com/assets/images/site/reddit-logo.png"
            socialName="r/FarkasAdrianFanClub"
          />
        </a>
        <a href="https://www.reddit.com/r/FarkasAdrianFanClub" target="_blank">
          <Card
            socialIcon="https://static-00.iconduck.com/assets.00/discord-icon-512x512-cy0cb96g.png"
            socialName="L&F Marketing Agency"
          />
        </a>
        <a href="https://www.reddit.com/r/FarkasAdrianFanClub" target="_blank">
          <Card
            socialIcon="https://i.postimg.cc/vZ3NB00g/XXx67-Byx-FPGF-modified.png"
            socialName="c/Hungary"
          />
        </a>
        <a href="https://www.reddit.com/r/FarkasAdrianFanClub" target="_blank">
          <Card
            socialIcon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/YouTube_social_red_circle_%282017%29.svg/300px-YouTube_social_red_circle_%282017%29.svg.png"
            socialName="Coming Soon"
          />
        </a>
      </Block>
    </>
  );
};
