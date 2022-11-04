import { useState } from "react";
import "./App.css";

function App() {
  const [matrixArray, setMatrixArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const shuffleMatrix = (e) => {
    e.preventDefault();
    let newArray = [...matrixArray];
    for (let i = matrixArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = newArray[i];
      newArray[i] = newArray[j];
      newArray[j] = temp;
    }
    setMatrixArray(newArray);
  };
  const sortMatrix = (e) => {
    e.preventDefault();
    let newArray = [...matrixArray];
    newArray.sort();
    setMatrixArray(newArray);
  };

  return (
    <div className="App">
      <header className="header">Shuffle and Sort</header>
      <div className="container">
        <div className="cardMatrix" id="cardMatrix">
          {matrixArray.map((element, index) => (
            <div className="card" key={index}>
              {element}
            </div>
          ))}
        </div>
        <div className="buttonDiv">
          <button
            onClick={(e) => shuffleMatrix(e)}
            className="button"
          >
            Shuffle
          </button>
          <button onClick={(e) => sortMatrix(e)} className="button">
            Sort
          </button>
        </div>
      </div>
      <footer>Shuffle and sort by Sagar Chandani</footer>
    </div>
  );
}

export default App;
