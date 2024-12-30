
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
  rating:number;
}

export default async function ProductDetailspage({
  params,
}: ProductDetailsPageProps) {
  const { slug } =  params;

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
            <p>
                  {Array.from({ length: Math.floor(product.rating.value) }).map((_, index) => (
                  <Image 
                    key={index} 
                    src="/icons/StarIcon.svg" 
                    alt="star" 
                    className="ratings-star-value-details" 
                    width={20} 
                    height={20} 
                  />
                ))}
              </p>
            <div className="productDetails-price">
              <span className="productDetails-current-price">
                ${product.price}
              </span>
              <span className="productDetails-original-price">
               <s>${product.wasPrice}</s> 
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
                  }}/> 
              
              

              <Image
                  src="/icons/favourite.svg"
                  alt="mail icon"
                  width={24}
                  height={24}
                  className="favorite"
              />
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
