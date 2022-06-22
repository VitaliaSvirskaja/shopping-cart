import styles from "./App.module.css";

function Home() {
  return (
    <div className={styles.App}>
      <img
        src="../images/banner.jpg"
        alt="Home Banner"
        className={styles.homeBanner}
      />
    </div>
  );
}

export default Home;
