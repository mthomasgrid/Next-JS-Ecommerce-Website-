import Image from "next/image";
import "./Featured.css";
import Link from "next/link";
import { fetchProducts, Product } from "../types";

export default async function FeaturedProducts() {
  const products: Product[] = await fetchProducts();
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div className="products_container">
      <h2 className="featured__products">Featured Products</h2>
      <div className="card_details">
        {products.slice(0, 4).map((product) => {
          return (
            <div key={product.id} className="card">
              <div className="feature-content">
                <div className="image-container">
                  <Image
                    src={product.thumbnail}
                    alt={`Product -- ${product.category}`}
                    width={150}
                    height={150}
                    className="products"
                    loading="lazy"
                  />
                  <Link href={`/productdetails/${product.id}`}>
                    <button className="feature-container-button">
                      View Details
                    </button>
                  </Link>
                </div>

                <div className="product-card-right-icon">
                  <Image
                    src="/icons/AddToCart.svg"
                    alt="Add to Cart"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/icons/AddToFav.svg"
                    alt="Add to Favorite"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/icons/Zoom.svg"
                    alt="Zoom"
                    width={32}
                    height={32}
                  />
                </div>
              </div>

              <h3 className="card_title">{product.category}</h3>
              <p className="card_code">{product.code}</p>
              <p className="card_price">${product.price}</p>
            </div>
          );
        })}
      </div>

      <div className="feature-line">
        <div className="line-active"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
}
