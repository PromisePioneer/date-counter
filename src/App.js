import './App.css';
import {useState} from "react";

export default function App() {
  return (
    <div className="App">
       <Counter/>
    </div>
  );
}

const Counter = () => {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const date = new Date("November 22 2023");
  date.setDate(date.getDate() + count);

  function handleStepChange(event){
      setStep(Number(event.target.value));
  }

  function handleCountChange(event){
      setCount(Number(event.target.value));
  }

  function addCount() {
      step !== 0 ? setCount((c) => c + step ) : setCount((c) => c + 1 )
  }

  function decreaseCount() {
      step !== 0 ? setCount((c) => c - step ) : setCount((c) => c - 1 )
  }

  function handleReset() {
      setStep(0);
      setCount(0);
  }


  return (
      <>
          <div>
              <div>
                  <input type="range" min="0" max="10" onChange={handleStepChange} value={step}/>
              </div>
              <div>
                  <button onClick={decreaseCount}>-</button>
                  <input type="text" onChange={handleCountChange} value={count}/>
                  <button onClick={addCount}>+</button>
              </div>
              <br/>
              <br/>
              <div>
                <span>{count === 0 ? "Today is " :  count > 0 ? `${count} days from today is ` : `${Math.abs(count) } days ago was `}</span>
                  <span>{date.toDateString()}</span>

                  {step !== 0 || count !== 0 ?
                      (
                      <div>
                          <button onClick={handleReset}>Reset</button>
                      </div>
                      ) : null}
              </div>
          </div>
      </>
  )
}
