
import RelatedProducts from "@/Components/Related/Related";
import "./detail.css";
import Image from "next/image";
import Description from "@/Components/Description/Descrtption";



import AddToCart from "./AddToCart";
  



interface ProductDetailsPageProps {
  params: {
    slug: string[];
  };
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
  colors: string[];
  code: string;
  thumbnail: string;
  imageSet: string[];
}

export default async function ProductDetailspage({
  params,
}: ProductDetailsPageProps) {
  const { slug } = params;

  const productId = slug[slug.length - 1];


 


  try {
    const response = await fetch(`http://localhost:8080/products/${productId}`);
    const product: Product = await response.json();

    



    return (
      <>
        <section className="productdetails-container">
          <div className="productDetails-left">
            <div className="left">
              {product.imageSet.slice(0, 3).map((image, index) => (
                <div key={index} className={`sm-${index + 1}`}>
                  <Image
                    src={image}
                    alt={`Photo ${index + 1}`}
                    width={192}
                    height={136}
                  />
                </div>
              ))}
            </div>
            <div className="middle">
              <Image
                src={product.thumbnail}
                alt="Main Photo"
                width={528}
                height={438}
              />
            </div>
          </div>

          <div className="productdetails-right">
            <h3 className="productDetails-name">{product.name}</h3>
            <div className="productDetails-price">
              <span className="productDetails-current-price">
                ${product.price}
              </span>
              <span className="productDetails-original-price">
                ${product.wasPrice}
              </span>
            </div>
            <p className="productDetails-description">{product.description}</p>

            <div className="productDetails-cart">
            <AddToCart
                  product={{
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    thumbnail: product.thumbnail,
                  }}

/> 
              {/* <button className="productDetails-cart-btn"  >Add To Cart</button> */}
              <svg
                className="favorite"
                width="24"
                height="24"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.7141 3.30182C12.9713 2.55413 11.9865 2.09955 10.9387 2.02074C9.89102 1.94192 8.84997 2.24411 8.00494 2.87236C7.11474 2.20608 6.00672 1.90396 4.90401 2.02683C3.80131 2.1497 2.78582 2.68844 2.06205 3.53456C1.33828 4.38068 0.959991 5.47133 1.00336 6.58688C1.04672 7.70243 1.50852 8.76001 2.29576 9.54665L7.50818 14.7917C7.57323 14.8577 7.65061 14.9101 7.73587 14.9459C7.82113 14.9816 7.91257 15 8.00494 15C8.0973 15 8.18875 14.9816 8.27401 14.9459C8.35927 14.9101 8.43665 14.8577 8.50169 14.7917L13.7141 9.54665C14.1218 9.13671 14.4452 8.64995 14.6658 8.11419C14.8864 7.57843 15 7.00418 15 6.42424C15 5.8443 14.8864 5.27004 14.6658 4.73428C14.4452 4.19852 14.1218 3.71177 13.7141 3.30182ZM12.7276 8.55396L8.00494 13.2992L3.28227 8.55396C2.8661 8.13343 2.5826 7.59861 2.46733 7.01657C2.35207 6.43454 2.41017 5.83121 2.63436 5.28228C2.85854 4.73335 3.23882 4.26325 3.72749 3.93097C4.21616 3.59868 4.79147 3.419 5.38123 3.41447C6.16912 3.41641 6.92404 3.73293 7.4802 4.29452C7.54524 4.3605 7.62262 4.41288 7.70788 4.44862C7.79314 4.48437 7.88459 4.50277 7.97695 4.50277C8.06931 4.50277 8.16076 4.48437 8.24602 4.44862C8.33128 4.41288 8.40866 4.3605 8.47371 4.29452C9.04625 3.79527 9.7859 3.53355 10.543 3.56233C11.3 3.59111 12.0179 3.90824 12.5514 4.44954C13.0849 4.99083 13.3941 5.71586 13.4164 6.47788C13.4387 7.23989 13.1725 7.98199 12.6716 8.55396H12.7276Z"
                  fill="#101750"
                />
              </svg>
            </div>
          </div>
        </section>
        <Description />
        <RelatedProducts />
      </>
    );
  } catch (e) {
    console.error(e);
    return <div>Error loading product details</div>;
  }
}
