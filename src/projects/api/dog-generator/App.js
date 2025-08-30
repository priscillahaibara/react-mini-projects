import { useEffect, useState } from "react";
import styles from './App.module.css'
import PageNav from "../../../components/PageNav";

export default function DogGenerator() {
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchImg = async function () {
    setLoading(true);

    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      console.log(data);
      setImg(data.message);
    } catch (err) {
      setError('Error loading image')
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {fetchImg()}, []);

  return (
    <main className={styles.main}>
      <PageNav />
      <div className={styles.mainContainer}>
        {img && <img className={styles.img} alt="Random dog" src={img} />}
        {error && <p>{error}</p>}
        <p className={styles.loading}>{loading && "Loading..."}</p>
        <button className={styles.button} onClick={fetchImg}>
          Get new dog
        </button>
      </div>
    </main>
  );
}
