import Link from "next/link";
import { fetchProducts, Product } from "../types";
import "./Categories.css";
import Image from "next/image";



export default async function Categories() {
  const products: Product[] = await fetchProducts();
  return (
    <div className="category-section">
      <h2 className="category-title">Top Categories</h2>

      <div className="category-item">
        {products.slice(0, 4).map((product) => {
          return (
            <Link href={`/productdetails/${product.id}`} className="category-image-container" key={product.id}>
              <Image
                src={product.thumbnail}
                width={272}
                height={272}
                alt="Image"
                className="category-image"
              />
              <p className="category-name">{product.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
