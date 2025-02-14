"use client";

import styles from "./page.module.css";
import Header from "@/components/header/header";
import Button from "@/components/button/button";
import { redirect } from "next/navigation";

export default function Home() {
  return (
    <div>
      <Header />
      <main className={styles.page}>
        <h1 className={styles.title}>Cardápio</h1>

        <p className={styles.description}>Olá!</p>
        <p className={styles.description}>
          Fique à vontade para explorar nosso cardápio e escolher o que te faz
          feliz. Quando bater a vontade, é só chamar um garçom e a gente prepara
          tudo com carinho. Aproveite! 🍻✨
        </p>

        <p className={styles.selectionDescription}>
          Selecione uma categoria
        </p>

        <div className={styles.menuOptions}>  
          <Button onClick={() => redirect("/cardapio/cafeteria")}>
            Cafeteria
          </Button>
          <Button onClick={() => redirect("/cardapio/bar")}>Bar</Button>
        </div>
      </main>
    </div>
  );
}
