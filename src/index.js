import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating color="blue" maxRating={5} onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
