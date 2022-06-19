import styles from "./App.module.css";

function App() {
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

export default App;
