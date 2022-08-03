import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [images , setImages] = useState([]);

  function getImagefromServer(){
    fetch("http://localhost:3010/images")
    .then(res => res.json())
    .then (data => 
      setImages(data));

    }

     useEffect(() => {
      getImagefromServer();
    }, []);

  
  return (
    <div className="App">
      <img className="logo" src="assets/hoxtagram-logo.png" />
      <section className="image-container">
        <article className="image-card">
          {images.map(image) => 
          <h2 className="title"></h2>
          <img src="./assets/image-placeholder.jpg" className="image" />
          <div className="likes-section">
            <span className="likes">0 likes</span>
            <button className="like-button">♥</button>
          </div>
          <ul className="comments">
            <li>Get rid of these comments</li>
            <li>And replace them with the real ones</li>
            <li>From the server</li>
          </ul>
        </article>
      </section>
    </div>
  );
}
export default App;


