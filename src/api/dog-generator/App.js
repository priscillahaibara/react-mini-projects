import { useEffect, useState } from "react";

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
    <div>
      <img src={img} />
      <button onClick={fetchImg}>Get new dog</button>
    </div>
  );
}
