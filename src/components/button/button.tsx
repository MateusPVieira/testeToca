import styles from "./button.module.css";

interface ButtonProps {
  children: React.ReactNode
  onClick: () => {}
}

export default function Button({ children, onClick }: ButtonProps) {
  return <button className={styles.button} onClick={() => onClick()}>{children}</button>;
}
