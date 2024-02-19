import React from 'react';
import styled from 'styled-components';

import { Image as ImageType } from '../../types';

const Thumbnail = styled.img.attrs({
  alt: 'Product Image',
})`
  display: block;
  width: 100%;
  aspect-ratio: 1/1;
`;

type ImageProps = {
  images: ImageType[];
}

export default function Images({ images }: ImageProps) {
  return (
    <div>
      <Thumbnail src={images[0].url} />
    </div>
  );
}
