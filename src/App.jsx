import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState({});

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice", {
        params: {
          _t: new Date().getTime(), // Véletlenszerű query paraméter
        },
      })
      .then((response) => {
        const { advice } = response.data.slip;
        setAdvice({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice.advice}</h1>
        <button onClick={fetchAdvice} className="button">
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
