import Image from "next/image";
import "./Featured.css";
import Link from "next/link";
import { fetchProducts, Product } from "../types"; 

export default async function FeaturedProducts() {
  const products: Product[] = await fetchProducts(); 
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div className="products_container">
      <h2 className='featured__products'>Featured Products</h2>
      <div className="card_details">
        {products.slice(0, 4).map((product) => {
          return (
            <Link
              href={`/productdetails/${product.id}`}
              key={product.id}
              className="card"
            >
              <Image
                src={product.thumbnail}
                alt={`Product -- ${product.category}`}
                width={150}
                height={150}
                className="products"
                priority
              />
              <h3 className="card_title">{product.category}</h3>
              <p className="card_code">{product.code}</p>
              <p className="card_price">${product.price}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
