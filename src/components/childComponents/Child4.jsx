import { useContext } from "react";
import { CountContext } from "../parentComponent/Parent";

const Child4 = () => {
     const count = useContext(CountContext);
    return (
        <div className="child4-box">
            <h1>{ count}</h1>
        </div>
     );
}
 
export default Child4;