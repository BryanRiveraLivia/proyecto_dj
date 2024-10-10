// /components/ProductCard.tsx
import { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.cover} alt={`${product.title} cover`} />
      <h2>{product.title}</h2>
      <p>Artist: {product.artist}</p>
      <p>Description: {product.description}</p>
      <a href={product.url_demo} target="_blank" rel="noopener noreferrer">
        Listen to Demo
      </a>
      <p>Price: ${product.price}</p>
    </div>
  );
};
