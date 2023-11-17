import { Landmark } from "./components/Landmark";
import styles from "./assets/styles/app.module.css";

export default function App() {
  return (
    <>
      <div>
        <header>
          <a href="">TravelGen</a>
        </header>
        <div>
          <Landmark/>
        </div>
      </div>
    </>
  );
}
