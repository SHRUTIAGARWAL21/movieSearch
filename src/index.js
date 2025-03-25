import React from "react";
import ReactDOM from "react-dom/client";
// import { useState } from "react";
import "./index.css";
import App from "./App-v2";
// import Rating from "./Rating";
// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <Rating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>this movie was rated {movieRating} stars</p>
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Rating
      maxRating={5}
      message={["Terrible", "bad", "Okay", "Good", "Amazing"]}
    />
    <Rating size={24} color="red" className="test" defaultRating={3} />
    <Test /> */}
  </React.StrictMode>
);
