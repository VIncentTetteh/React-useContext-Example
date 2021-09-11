import Child2 from "./Child2";
import '../assets/css/App.css';
import { useContext } from "react";
import { CountContext } from "../parentComponent/Parent";


const Child1 = () => {
    const count = useContext(CountContext);
    
    return (
        <div className="child1-box">
            <Child2 />
            <h1>{ count}</h1>
        </div>
     );
}
 
export default Child1;