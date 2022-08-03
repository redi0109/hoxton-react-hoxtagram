import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);

  function getImagefromServer() {
    fetch("http://localhost:3010/images")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }

  useEffect(() => {
    getImagefromServer();
  }, []);

  return (
    <div className="App">
      <img className="logo" src="assets/hoxtagram-logo.png" />
      <section className="image-container">
        <article className="image-card">
          {images.map((image) => (
            <>
              <h2 className="title">{image.title}</h2>
              <img src={image.image} className="image" />
              <div className="likes-section">
                <span className="likes">{image.likes}</span>
                <button className="like-button">♥</button>
              </div>
              <ul className="comments">
              {image.comments.map((comment) =>
                <li>{comment.content}</li>
                )}
              </ul>
            </>
          ))}
        </article>
      </section>
    </div>
  );
}
export default App;
