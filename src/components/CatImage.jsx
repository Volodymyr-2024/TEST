import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./Catimage.module.css";

export default function CatImage() {
  const [catImage, setCatImage] = useState(null);
  const CatAPI = "https://api.thecatapi.com/v1/images/search";

  async function fetchCatAPI() {
    try {
      const response = await axios.get(CatAPI);
      const data = response.data;
      setCatImage(data[0].url);
    } catch (error) {
      console.error("Ошибка при получении изображения", error);
    }
  }
  useEffect(() => {
    fetchCatAPI();
  }, []);
  return (
    <div className={styles.container}>
      <h1>Random Cat Image</h1>
      <div className={styles.cat_img}>
        {catImage ? (
          <img src={catImage} alt="Random Cat"></img>
        ) : (
          <p>Downloads...</p>
        )}
      </div>
      <button onClick={fetchCatAPI}>Load New Image</button>
    </div>
  );
}
