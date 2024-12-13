import Image from 'next/image';
import './Trending.css';

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




 export  default async function TrendingProducts(){

    //const router = useRouter();

    // const handleClick = (id:string) => {
    //     //         router.push(`/productdetails/${id}`);
    //     //     };
    try {
        const response = await fetch("http://localhost:8080/products");
        const products: Product[] = await response.json();
        return (
            <div className="products_container">
           <h2 className='trending__products'>Trending Products</h2>
             <div className="card_details-card3">
                 {products.slice(21,25).map((product) => (
                    <div
                        key={product.id}
                        className="card"
                        
                    >
                         <Image
                            src={product.thumbnail}
                            alt={`Product -- ${product.category}`}
                            width={150}
                            height={150}
                            className="products-card3"
                        /> 
                        <h3 className="card_title-card3">{product.category}</h3>
                        <div className="price-container-card3">
                            <span className="current-price">${product.price}</span>
                            <span className="original-price">${product.wasPrice}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        )}
        catch(e){
            console.log(e)
        }
 }


 //onClick={() => handleClick(product.id)}