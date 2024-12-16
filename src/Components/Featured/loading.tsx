import './Featured.css';

export default function FeatureSkeleton() {
  const skeletonCount = 4;

  return (
    <div className="skeleton-container">
      {Array.from({ length: skeletonCount }).map((_, index) => (
        <div className="card skeleton" key={index}>
          <div className="image skeleton-image"></div>
          <div className="card_title skeleton-title"></div>
          <div className="card_code skeleton-code"></div>
          <div className="card_price skeleton-price"></div>
        </div>
      ))}
    </div>
  );
}
