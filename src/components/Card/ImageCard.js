import React from 'react';
import { ImageVariant } from './Card.styles';

export default function ImageCard(props) {
  const imageLink = props.imageLink;
  const imageTitle = props.imageTitle;
  const imageDescription = props.imageDescription;
  return (
    <ImageVariant>
      <img src={imageLink} width="100%" />
      <h3>{imageTitle}</h3>
      <p>{imageDescription}</p>
    </ImageVariant>
  );
}
