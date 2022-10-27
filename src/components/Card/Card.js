import React from 'react';
import { SocialVariant } from './Card.styles';

export default function SocialCard(props) {
  const socialIcon = props.socialIcon;
  const socialName = props.socialName;
  return (
    <SocialVariant>
      <img src={socialIcon} width="86px" />
      <h3>{socialName}</h3>
    </SocialVariant>
  );
}
