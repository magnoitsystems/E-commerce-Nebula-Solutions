import ProductCard from "./ProductCard";
import styles from "./ProductGrid.module.css";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  discountPrice?: number;
  discountPercent?: number;
}

interface ProductGridProps {
  products: Product[];
  showViewAllButton?: boolean;
  viewAllButtonText?: string;
  viewAllButtonPath?: string;
  onViewAllClick?: () => void;
}

export default function ProductGrid({ 
  products, 
  showViewAllButton = false, 
  viewAllButtonText = "Ver productos",
  viewAllButtonPath = "/products",
  onViewAllClick 
}: ProductGridProps) {
  const navigate = useNavigate();

  const handleViewAll = () => {
    if (onViewAllClick) {
      onViewAllClick();
    } else {
      navigate(viewAllButtonPath);
    }
  };

  return (
    <div>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {showViewAllButton && (
        <div className={styles.buttonContainerProperties}>
          <button onClick={handleViewAll} className={styles.seeAllProductsProperties}>
            {viewAllButtonText}
          </button>
        </div>
      )}
    </div>
  );
}