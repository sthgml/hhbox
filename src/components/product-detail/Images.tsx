import React from 'react';
import { Image } from '../../types';

export default function Images({ images }: {
  images: Image[];
}) {
  return (
    <div>
      <img src={images[0].url} alt="" />
    </div>
  );
}
