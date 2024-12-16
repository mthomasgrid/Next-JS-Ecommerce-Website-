

// export interface Brand {
//     type: string;
//     label: string;
//     values: string[]; 
// }

// export interface Category {
//     type: string;
//     label: string;
//     values: string[];
// }

// export interface Price {
//     type: string;
//     label: string;
//     values: {
//         min: number;
//         max: number;
//     };
// }

// export interface DiscountPercentage {
//     type: string;
//     label: string;
//     values: number[];
// }

// export interface Rating {
//     type: string;
//     label: string;
//     values: number[];
// }

// export interface Colors {
//     type: string;
//     label: string;
//     values: string[]; 
// }



import './Sidebar.css';

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



export default async function Sidebar() {
    try {
        const response = await fetch("http://localhost:8080/filters");
        const data = await response.json();

       
        const brands: Brand[] = data.brand ? [data.brand] : [];
        const categorys: Category[] = data.category ? [data.category] : [];
        

        return (
            <>
                <section className="sidebar-section">
                    <h2 className='sidebar-title'>Products Brand</h2>
                    <hr />
                    {brands.map((brand) => (
                        <div className="brand" key={brand.label}>
                            <div>
                                {brand.values.slice(0, 5).map((value, index) => (
                                    <div key={index} className='sidebar-brand'>
                                        <input type="checkbox" name={value} id={value} />
                                        <label>{value}</label>
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
                                {category.values.slice(0, 5).map((value, index) => (
                                    <div key={index} className='sidebar-brand'>
                                        <input type="checkbox" name={value} id={value} />
                                        <label>{value}</label>
                                    </div>
                                ))}
                            </div>
                           
                        </div>
                    ))}

                    

                    
                   


                </section>
            </>
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
