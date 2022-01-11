import { useState } from "react";
import "./Counter.css";

export function UpDownCounter() {
    let [count, setCount] = useState<number>(0);

    let upCount = () => {
        setCount(count += 1);
    }

    let downCount = () => {
        setCount(count -= 1);
    }

    return (
    <div className="Counter">

        <button onClick={upCount}>Up</button>
        <p>{count}</p>
        <button onClick={downCount}>Down</button>
            
        </div>
    )
}

