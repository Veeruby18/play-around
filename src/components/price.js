import React from 'react';
import { product } from '../product';

export default function Price() {
  return <Card.Text>${product.price.toFixed(2)}</Card.Text>;
}
