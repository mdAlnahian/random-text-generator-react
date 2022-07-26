import { useState } from "react";
import "./App.css";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  // console.log(text);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if(count <= 0){
      amount = 1 ;
    }
    if(count > 8){
      amount = 8;
    }
    setText(data.slice(0,amount))
  };
  

  return (
    <div className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form onSubmit={handleFormSubmit}>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn">Generate</button>
      </form>
      <article className="lorem-text">
        {
          text.map((item,index)=>{
            return (
              <p key={index}>{item}</p>
            )
          })
        }

      </article>
    </div>
  );
}

export default App;
