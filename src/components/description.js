import React from 'react';
import { product } from '../product';

export default function Description() {
  return <Card.Text>{product.description}</Card.Text>;
}
