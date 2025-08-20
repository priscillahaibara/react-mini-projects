import { useEffect, useState } from "react";
import "./App.css";

export default function DogGenerator() {
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImg = async function () {
    setLoading(true);

    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      console.log(data);
      setImg(data.message);
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {fetchImg()}, []);

  return (
    <div className="main-container">
      <img className="img" alt="Random dog" src={img} />
      <p className="loading">{loading && "Loading..."}</p>
      <button className="button" onClick={fetchImg}>
        Get new dog
      </button>
    </div>
  );
}
