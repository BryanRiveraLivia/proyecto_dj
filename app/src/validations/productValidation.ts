// /validations/productValidation.ts
import { Product } from '../types/product';

export const validateProduct = (product: Product): boolean => {
  if (!product.title || !product.price || !product.url) {
    console.error('Invalid product data:', product);
    return false;
  }
  return true;
};
