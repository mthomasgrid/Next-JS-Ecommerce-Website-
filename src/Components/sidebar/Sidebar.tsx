
import './Sidebar.css';
import Image from 'next/image';

export interface Brand {
    type: string;
    label: string;
    values: string[]; 
}




export interface DiscountPercentage {
    type: string;
    label: string;
    values: number[];
}



export interface Category {
        type: string;
        label: string;
        values: string[];
}

export interface Rating{
    type: string;
    label: string;
    values: number[];
}





export default async function Sidebar() {
    try {
        const response = await fetch("http://localhost:8080/filters");
        const data = await response.json();

       
        const brands: Brand[] = data.brand ? [data.brand] : [];
        const categorys: Category[] = data.category ? [data.category] : [];
        const discounts:DiscountPercentage[]=data.discountPercentage ? [data.discountPercentage]:[];
        const ratings:Rating[]=data.rating?[data.rating]:[]
       

        return (
            
                <section className="sidebar-section">
                    <h2 className='sidebar-title'>Products Brand</h2>
                    <hr />
                    {brands.map((brand) => (
                        <div className="brand" key={brand.label}>
                            <div>
                                {brand.values.slice(0, 7).map((value, index) => (
                                    <div key={index} className='sidebar-brand'>
                                        <input type="checkbox" name={value} id={value} />
                                        <label>{value}</label>
                                    </div>
                                ))}
                            </div>
                           
                        </div>
                    ))}

                    {discounts.map((discount) => (
                        <div className="brand" key={discount.label}>
                            <h2 className='sidebar-title'>Discounts</h2>
                            <hr />
                            <div>
                                {discount.values.map((value, index) => (
                                    <div key={index} className='sidebar-brand'>
                                        <input type="checkbox"  className='categories'/>
                                        <label>{value}%  CashBack Offer</label>
                                    </div>
                                ))}
                            </div>
                           
                        </div>
                    ))}


                    {ratings.map((rating) => (
                        <div className="brand" key={rating.label}>
                            <h2 className='sidebar-title'>Rating</h2>
                            <hr />
                            <div>
                                {rating.values.reverse().map((value, index) => (
                                    <div key={index} className='sidebar-brand'>
                                        <input type="checkbox" className='ratings' id={`rating-${index}`} />
                                        <label htmlFor={`rating-${index}`}>
                                            <span className="ratings-star-container">
                                                {Array.from({ length: value }, (_, starIndex) => (
                                                    <Image
                                                        key={starIndex}
                                                        src="/icons/StarIcon.svg"
                                                        alt="star"
                                                        className='ratings-star'
                                                        width={20}
                                                        height={20}
                                                    />
                                                ))}
                                            </span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}



                    {categorys.map((category) => (
                        <div className="brand" key={category.label}>
                            <h2 className='sidebar-title'>Categories</h2>
                            <hr />
                            <div>
                                {category.values.slice(0,8).map((value, index) => (
                                    <div key={index} className='sidebar-brand'>
                                        <input type="checkbox" name={value} id={value} className='categories'/>
                                        <label>{value}</label>
                                    </div>
                                ))}
                            </div>
                           
                        </div>
                    ))}


                       
                      
                    
                        
                    
                   


                </section>
            
        );
    } catch (e) {
        console.error(e);
        return (
            <>
                <h1>No Products Found</h1>
            </>
        );
    }
}
