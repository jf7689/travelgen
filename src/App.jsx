import { Landmark } from "./components/Landmark";
import styles from "./assets/styles/app.module.css";

export default function App() {
  return (
    <>
      <div>
        <header>
          <div className={styles.headerStyle}>
            <a className={styles.logo} href="">TravelGen</a>
          </div>
        </header>
        <div className={styles.container}>
          <Landmark/>
        </div>
      </div>
    </>
  );
}
