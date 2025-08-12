import { useState, useEffect, useRef } from "react";

function PreviousValueExample() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(count);

  useEffect(() => {
    prevCount.current = count; // store current value for next render
  }, [count]);

  return (
    <div>
      <p>Now: {count}, Before: {prevCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
export default PreviousValueExample;
// This component demonstrates how to keep track of the previous value of a state variable using useRef