import "./Latest.css";
import Image from "next/image";
import Link from 'next/link';

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
  imageSet: string[];
}
export default async function LatestProducts() {
  try {
    const response = await fetch("http://localhost:8080/products");
    const products: Product[] = await response.json();
    return (
      <>
      <h2 className='latest__products'>Latest Products</h2>
        <div className="card_fulldetails">
          {products.slice(6, 12).map((product) => (
            <Link href={`/productdetails/${product.id}`} className="card2" key={product.id} >
              <div className="image-container">
                <Image
                  src={product.thumbnail}
                  alt="Game Console"
                  className="productsImage"
                  width={416}
                  height={272}
                />
              </div>
              <div className="card-content">
                <h3 className="product-title">{product.category}</h3>
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
  } catch (e) {
    console.log(e);
  }
}


