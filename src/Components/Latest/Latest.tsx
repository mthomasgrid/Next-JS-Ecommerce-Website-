import "./Latest.css";
import Image from "next/image";
import Link from "next/link";
import { fetchProducts, Product } from "../types";

export default async function LatestProducts() {
  const products: Product[] = await fetchProducts();
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <>
      <h2 className="latest__products">Latest Products</h2>
      <div className="card_fulldetails">
        {products.slice(6, 20).filter((product) => product.rating.value > 3).map((product) => (
          <Link
            href={`/productdetails/${product.id}`}
            className="card2"
            key={product.id}
          >
            <div className="image-container">
              <Image
                src={product.thumbnail}
                alt="Game Console"
                className="productsImage"
                width={416}
                height={272}
                loading="lazy"
              />
            </div>
            <div className="card-content">
              <h3 className="product-card-title">{product.category}</h3>
              <div className="price-container">
                <span className="current-price">${product.price}</span>
                <span className="original-price">${product.wasPrice}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
