

import ProductCard from "@/Components/ProductCard/ProductCard";
import Sidebar from "@/Components/sidebar/Sidebar";
import { fetchProducts, Product } from "@/Components/types";
import Link from "next/link";

import PerPage from "@/Components/PerPage/Perpage";

export default async function ProductsPage() {
  let products: Product[] = [];
  try {
    products = await fetchProducts();
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }

  

  return (
    <>
      <h1 className="product-title">Products</h1>
      <div className="product-links">
        <ul>
          <li>
            <Link href="/" className="products-links-home">Home</Link>
          </li>
          <li>
            <Link href="/products" className="products-links-active">Products</Link>
          </li>
        </ul>
      </div>

      <div className="filter-container">
        <PerPage />
        

        <div className="select-container">
          <span className="select-option">Sort By</span>
          <select className="page-values-price">
              <option value="price-high-to-low">Price: High - Low</option>
              <option value="price-low-to-high">Price: Low - High</option>
          </select>

        </div>

        <div className="view-container">
          <span className="view-option">View</span>
         

          <div className="list-view">
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
          </div>


          <div className="grid-view">
            <div className="line"></div>
            <div className="line"></div>
          </div>
          
        </div>
      </div>

      <div className="product-lister">
        <Sidebar />
        <ProductCard products={products}  />
      </div>
    </>
  );
}

