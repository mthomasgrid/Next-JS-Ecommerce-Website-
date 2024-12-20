import Image from "next/image";
import "./Trending.css";
import { fetchProducts, Product } from "../types";
import Link from "next/link";

export default async function TrendingProducts() {
  const products: Product[] = await fetchProducts();
 
  return (
    <div className="products_container">
      <h2 className="trending__products">Trending Products</h2>
      <div className="card_details-card3">
        {products.slice(21, 25).map((product) => (
          <Link href={`/productdetails/${product.id}`} key={product.id} className="card">
            <Image
              src={product.thumbnail}
              alt={`Product -- ${product.category}`}
              width={150}
              height={150}
              className="products-card3"
              priority
            />
            <h3 className="card_title-card3">{product.category}</h3>
            <div className="price-container-card3">
              <span className="current-price">${product.price}</span>
              <span className="original-price">${product.wasPrice}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}


