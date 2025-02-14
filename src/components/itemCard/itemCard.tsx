import styles from "./itemCard.module.css";
import { formatPrice } from "@/utils/utils";

interface ItemCardProps {
  name: string;
  description?: string;
  price:number;
}

export default function ItemCard({ name, description, price }: ItemCardProps) {
  return (
    <div className={styles.itemCard}>
      <div className={styles.itemInfo}>
        <div className={styles.itemContent}>
          <h3 className={styles.itemName}>{name}</h3>
          <p className={styles.itemDescription}>{description}</p>
        </div>
      </div>
      <p className={styles.itemPrice}>R$ {formatPrice(price)}</p>
    </div>
  );
}
