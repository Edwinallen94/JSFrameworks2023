// Import useEffect here
import { useEffect, useState } from "react";
import "./App.css";
import ronSwansonImage from "./assests/ronswanson.png";
// import Axios (or use Fetch)
import axios from "axios";

function App() {
  /**
   * Set up your state
   */

  /**
   * Make an AJAX call with the useEffect hook
   */

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHadError] = useState(false);
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    const apiUrl = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
    axios
      .get(apiUrl)
      .then((data) => {
        setQuote(data.data[0]);
        setIsLoading(false);
      })
      .catch((error) => {
        hasError(error.message);
        setHadError(true);
        setIsLoading(false);
      });
  }, [hasError]);

  return (
    <body class="bg-warning text-center">
      <img src={ronSwansonImage} alt="" width="450" height="423" class="mt-4" />
      <div class="container">
        {/* Display a loading message */}
        {/* Display an error message if the API fails */}
        <blockquote
          id="quote"
          class="blockquote bg-dark text-white border-0 mb-4"
        >
          {/* Complete me */}
        </blockquote>
      </div>
    </body>
  );
}

export default App;
