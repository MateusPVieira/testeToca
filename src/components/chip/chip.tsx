import styles from "./chip.module.css";

interface ChipProps {
  name: string;
  onClick?: () => void;
  isActive?: boolean;
}

export default function Chip({ name, onClick, isActive }: ChipProps) {
  return (
    <button
      className={`${styles.chip} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
