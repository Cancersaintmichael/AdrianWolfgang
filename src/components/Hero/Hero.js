import React from 'react';
import { PrimaryButton, SecondaryButton } from '../Button/Button';
import { MainContainer } from '../Container/Container';
import { StyledHero } from './Hero.styles';

export default function Hero(props) {
  const mainTitle = props.mainTitle;
  const subTitle = props.subTitle;
  return (
    <StyledHero>
      <MainContainer>
        <h1>{mainTitle}</h1>
        <h2>{subTitle}</h2>
        <img
          src="https://i.redd.it/snoovatar/avatars/nftv2_bmZ0X2VpcDE1NToxMzdfNmFjYjhmYjgyODgwZDM5YzJiODQ0NmY4Nzc4YTE0ZDM0ZWU2Y2ZiN18xMTA1MQ_rare_f056e3a4-b22d-4764-a9db-881c443fc5a0.png"
          width="150px"
        />
        <img
          src="https://i.redd.it/snoovatar/avatars/nftv2_bmZ0X2VpcDE1NToxMzdfNmFjYjhmYjgyODgwZDM5YzJiODQ0NmY4Nzc4YTE0ZDM0ZWU2Y2ZiN18xMTA1MQ_rare_f056e3a4-b22d-4764-a9db-881c443fc5a0.png"
          width="250px"
        />
               <img
          src="https://i.redd.it/snoovatar/avatars/nftv2_bmZ0X2VpcDE1NToxMzdfNmFjYjhmYjgyODgwZDM5YzJiODQ0NmY4Nzc4YTE0ZDM0ZWU2Y2ZiN18xMTA1MQ_rare_f056e3a4-b22d-4764-a9db-881c443fc5a0.png"
          width="100px"
        />
        <p>"Lorem ipsum sdushefhsdfh hfsdufhsdf hufsdhf"</p>
        <div>
          <PrimaryButton>Click here</PrimaryButton>
          <SecondaryButton>Do not click</SecondaryButton>
        </div>
      </MainContainer>
    </StyledHero>
  );
}
