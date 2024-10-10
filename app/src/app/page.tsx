// /app/page.tsx
import { getProducts } from "../libs/productService";
import { ProductCard } from "../components/ProductCard";

const HomePage = async () => {
  const products = await getProducts();

  return (
    <main>
      <h2>
        <strong>Mas descargados</strong>
      </h2>
      <div className="most-downloads">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsum
        doloribus quam modi suscipit placeat, cum nemo ab illo soluta officia
        quia expedita dolorem! Obcaecati explicabo sed voluptates perspiciatis
        eaque!
      </div>
      <br />
      <hr />
      <br />
      <h2>
        <strong>Product List</strong>
      </h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id_product} product={product} />
        ))}
      </div>
    </main>
  );
};

export default HomePage;
