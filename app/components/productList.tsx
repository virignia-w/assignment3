import ProductCard from "./productCard";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );

}