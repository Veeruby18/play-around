import React from 'react';
import { product } from '../product';

export default function Image() {
  return <Card.Img variant="top" src={product.image} alt={product.name} />;
}
