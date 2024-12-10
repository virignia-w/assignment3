type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
  };

  export default function ProductCard({ product }: { product: Product }) {
    
    return (
      <div className="productCard">
        <img className="productImage" src={product.image} alt={product.name} />
        <h3 className="productName">{product.name}</h3>
        <p className="productPrice">${product.price}</p>
        <button>Ivite Crystal</button>
      </div>
    );
}


