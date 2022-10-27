import React from 'react';
import { StyledCard } from './Card.styles';

export default function SocialCard(props) {
  const socialIcon = props.socialIcon;
  const socialName = props.socialName;
  return (
    <StyledCard>
      <img src={socialIcon} width="86x" />
      <h3>{socialName}</h3>
    </StyledCard>
  );
}
