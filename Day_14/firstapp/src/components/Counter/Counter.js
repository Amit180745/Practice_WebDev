import React,{useState} from 'react';

const Counter = () => {
    let initValCounter = 0;
    const [counter, setCounter] = useState(initValCounter)

    function decrease() {
        if (counter > 0) {
            setCounter (counter-1)
        }
    }

    function increase() {
        if (counter < 5) {
            setCounter (counter+1)
        }
    }

  return (
    <div>
        <button onClick={decrease} >-</button>
        <span>Counter : {counter}</span>
        <button onClick={increase}>+</button>
    </div>
  )
}

export default Counter