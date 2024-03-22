import Image from "next/image";
import styles from "./page.module.scss";
import Header from "./ui/header";
import Hero from "./ui/hero";
import SmallCardsContainer from "./ui/small-cards-container";
import BigCard from "./ui/big-card";
import Footer from "./ui/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main className={styles.main}>
        <SmallCardsContainer />
        <BigCard />
      </main>
      <Footer />
    </>
  );
}
