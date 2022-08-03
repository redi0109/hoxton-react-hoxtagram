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

  function cretePost (image, title : string) {
   fetch("http://localhost:3010/images", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      image,

    }),
  }).then((res) => res.json())
  .then((newPost) => {
    setImages([...images, newPost]);
});

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

         
          <form onSubmit={(event) => {event.preventDefault()
            cretePost (event.target.image.value, event.target.title.value)}}>
            <input type="text"name="title" />
            <input type="text" placeholder="Image URL" />
            <button type="submit">Post</button>
          </form>


        </article>
      </section>
    </div>
  );
}
}
export default App;
