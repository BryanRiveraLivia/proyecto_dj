// /libs/productService.ts
import { apiClient } from './apiClient';
import { Product } from '../types/product';

export const getProducts = async (): Promise<Product[]> => {
  return apiClient('/products');  // La base URL ya se está manejando en el apiClient
};
