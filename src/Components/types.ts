
export interface Rating {
  value: number;
  votedCount: number;
}

export interface Product {
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


export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch("http://localhost:8080/products");
    const products: Product[] = await response.json();
    
    return products;
  } catch (e) {
    console.log(e);
    return [];
  }
};
