import { useState, useEffect } from "react";

function Count() {
  const [count, setCount] = useState(0);

  // 🟢 Mount only (componentDidMount)
  useEffect(() => {
    console.log("✅ Component mounted");
  }, []);

  // 🔴 Unmount only (componentWillUnmount)
  useEffect(() => {
    return () => {
      console.log("🗑️ Component unmounted");
    };
  }, []);

  // 🟡 Update on count change (componentDidUpdate for count)
  useEffect(() => {
    console.log("🔄 Count changed:", count);

    // Cleanup before next update or on unmount
    return () => {
      console.log("♻️ Cleanup before next count update or unmount");
    };
  }, [count]);

  // Increment function
  function increment() {
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <h1 className="text-6xl font-bold">{count}</h1>
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default Count;
