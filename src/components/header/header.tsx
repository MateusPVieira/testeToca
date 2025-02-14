import Image from "next/image";
import styles from "./header.module.css";
import logo from "../../assets/logo.svg";


export default function Header() {
  return (
    <div>
      <header className={styles.header}>
        <Image src={logo} alt="Logo" width={180} />
      </header>
    </div>
  );
}
