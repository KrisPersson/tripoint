import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.main__section}>
        <div className={styles.hero}>
          <div className={styles.hero__content}>
            <div className={`${styles.container} ${styles.containerLarge}`}>
              Hero
            </div>
          </div>
        </div>
      </section>
      <section className={styles.main__section}>
        <div className={styles.container}>
          <div className={styles.module}>Module</div>
        </div>
      </section>
      <section className={styles.main__section}>
        <div className={styles.container}>
          <div className={styles.module}>Module</div>
        </div>
      </section>
      <section className={styles.main__section}>
        <div className={styles.container}>
          <div className={`${styles.module} ${styles.moduleIgnoreGutter}`}>
            Module
          </div>
        </div>
      </section>
    </main>
  );
}
