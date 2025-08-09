import { useState } from "react";
function Count()
{
    const [count,setCount]=useState(0);

    function increment(){
        setCount((prev)=>{console.log(prev); return prev+1;});
    }

    return(<>
        <h1>{count}</h1>
        <button onClick={increment}>increment</button>
    </>);
}
export default Count;