import './Latest.css'
export default function LoadingSkeleton(){
    return(
        <>
        <h2 className="latest__products">Latest Products</h2>
        <div className="card_fulldetails">
           
            {Array.from({ length: 6 }).map((_, index) => (
                    <div className="card2 skeleton-card" key={index}>
                    <div className="image-container skeleton-image"></div>
                    <div className="card-content">
                        <h3 className="product-title skeleton-text"></h3>
                        <div className="price-container">
                        <span className="current-price skeleton-price"></span>
                        <span className="original-price skeleton-price"></span>
                        </div>
                    </div>
                    </div>
            ))}
        </div>
        </>
    )
}