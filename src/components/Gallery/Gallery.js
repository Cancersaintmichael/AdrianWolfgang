import React from 'react';
import { StyledGallery } from './Gallery.styles';

export default function Gallery(props) {
  return <StyledGallery>{props.children}</StyledGallery>;
}
