import styles from "./small-cards-container.module.scss";
import Image from "next/image";
import Link from "next/link";

import { products } from "../products";

export default async function SmallCardsContainer() {
  return (
    <section aria-label="Product cards" className={styles.productSection}>
      <div className={`${styles.smallCardContainer} container`}>
        {products.map((product, i) => {
          return (
            <article aria-label="Product" key={i} className={styles.smallCard}>
              <div className={styles.imageSection}>
                <Image
                  src={product.productImgSrc}
                  alt={`Image of product named ${product.name}`}
                  fill={true}
                  className={styles.productImg}
                />
              </div>
              <div className={styles.infoSection}>
                <div className={styles.content}>
                  <div className={styles.typeTitle}>{product.type}</div>
                  <div className={styles.nameTitle}>{product.name}</div>
                  <Image
                    src={product.featureDotImgSrc}
                    className={styles.circles}
                    width={126}
                    height={16}
                    alt="Product features"
                  />
                </div>
                <Link className={styles.shopNow} href="/">
                  Shop now
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
