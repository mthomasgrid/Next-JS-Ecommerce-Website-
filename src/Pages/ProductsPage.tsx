
//import Display from "@/Components/ProductCard/Display";
import ProductCard from "@/Components/ProductCard/ProductCard";
import Sidebar from "@/Components/sidebar/Sidebar";
import { fetchProducts, Product } from "@/Components/types";
import Link from "next/link";

export default async function ProductsPage(){

// Start

const products: Product[] = await fetchProducts();

// end


    return(
        <>
                <h1 className="product-title">Products</h1>
                <div className="product-links">
                <ul>
                    <li>
                    <Link href="/">Home</Link>
                    </li>
                    <li>
                    <Link href="/products">Products</Link>
                    </li>
                </ul>
                </div>



                    <div className="container">
                    <div className="select-container">
                        <span className="select-option">Per Page</span>
                        <select>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        </select>
                    </div>

                    <div className="select-container">
                        <span className="select-option">Sort By</span>
                        <select>
                        <option value="price-high-to-low">Price: High - Low</option>
                        <option value="price-low-to-high">Price: Low - High</option>
                        </select>
                    </div>


                    <div className="select-container">
                        <span className="select-option">VIEW</span>
                        <select>
                        <option value="price-high-to-low">LIST VIEW</option>
                        <option value="price-low-to-high">GRID VIEW</option>
                        </select>
                    </div>

                    <div className="view-container">
                        <span className="view-option">View</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2" y="2" width="4" height="4" rx="1" stroke="#101750"/>
                            <rect x="10" y="2" width="4" height="4" rx="1" stroke="#101750"/>
                            <rect x="2" y="10" width="4" height="4" rx="1" stroke="#101750"/>
                            <rect x="10" y="10" width="4" height="4" rx="1" stroke="#101750"/>
                        </svg>

                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2" y="2" width="12" height="4" rx="1" stroke="#101750"/>
                            <rect x="2" y="10" width="12" height="4" rx="1" stroke="#101750"/>
                        </svg>

                    </div>

                  


</div>

        
                <div className="product-lister">
                            <Sidebar />
                            <ProductCard  products={products} />
                </div>


               {/* <Display products={products}/> */}
        </>
    )
}