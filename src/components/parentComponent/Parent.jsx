import { useState, createContext } from "react";
import Child1 from "../childComponents/Child1";
export const CountContext = createContext(0);
const Parent = () => {
    const [count, setCount] = useState(0);
    return (
        
        <CountContext.Provider value={count}>
            <Child1 />
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Add</button>
            <button onClick={() => setCount(count - 1)}>Substract</button>
        </CountContext.Provider>
     );
}
 
export default Parent;