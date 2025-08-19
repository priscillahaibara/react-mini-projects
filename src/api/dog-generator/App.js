import { useEffect, useState } from "react";
import './App.css'

export default function DogGenerator() {
  const [img, setImg] = useState(null);

  const fetchImg = async function () {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      console.log(data);
      setImg(data.message);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="main-container">
      <img className="img" src={img} />
      <button className="button" onClick={fetchImg}>Get new dog</button>
    </div>
  );
}
