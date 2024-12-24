import "./ProductCard.css";
import Image from "next/image";

import Link from "next/link";

import { Product } from "../types";

type ProductCardProps = {
  products: Product[];
};

export default async function ProductCard({ products }: ProductCardProps) {
  return (
    <>
      <div className="dummy">
        <div className="product-design">
          {products.slice(0, 10).map((product) => (
            <Link
              href={`/productdetails/${product.id}`}
              className="product-card"
              key={product.id}
            >
              <div className="product-card-left">
                <Image
                  src={product.thumbnail}
                  alt="Product Image"
                  width={288}
                  height={200}
                />
              </div>
              <div className="product-card-right">
                <p className="product-card-right-title">{product.name}</p>
                <div className="product-card-right-price">
                  <span className="product-card-right-current-price">
                    ${product.price}
                  </span>
                  <span className="product-card-right-original-price">
                    ${product.wasPrice}
                  </span>
                </div>
                <p className="product-card-right-description">
                  {product.description}
                </p>
              </div>
              </Link>



          ))}

              <div className="product-card-right-icon">
                  <Image
                    src="/icons/AddToCart.svg"
                    alt="Favorite"
                    width={32}
                    height={32}
                  />

                  <Image
                    src="/icons/AddToFav.svg"
                    alt="Favorite"
                    width={32}
                    height={32}
                  />

                  <Image
                    src="/icons/Zoom.svg"
                    alt="Favorite"
                    width={32}
                    height={32}
                  />
                </div>
            
        </div>
      </div>
    </>
  );
}
