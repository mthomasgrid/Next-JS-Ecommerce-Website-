import "./Categories.css";
import Image from "next/image";

interface Rating {
  value: number;
  votedCount: number;
}
interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  wasPrice: number;
  isSale: boolean;
  isFeatured: boolean;
  discountPercentage: number;
  description: string;
  rating: Rating;
  createdAt: string;
  specialOffer: string | null;
  colors: string[];
  soldTimes: number;
  code: string;
  thumbnail: string;
  imageSet: string;
}

export default async function Categories() {
  try {
    const response = await fetch("http://localhost:8080/products");
    const products: Product[] = await response.json();
    return (
      <div className="category-section">
        <h2 className="category-title">Top Categories</h2>

        <div className="category-item">
          {products.slice(0, 4).map((product) => {
            return (
              <div className="category-image-container" key={product.id}>
                <Image
                  src={product.thumbnail}
                  width={272}
                  height={272}
                  alt="Image"
                  className="category-image"
                />
                <p className="category-name">{product.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  } catch (e) {
    console.log(e);
  }
}
