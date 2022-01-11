import { useState } from "react";

export function UpDownCounter() {
    let [count, setCount] = useState<number>(0);

    let upCount = () => {
        setCount(count += 1);
    }

    let downCount = () => {
        setCount(count -= 1);
    }


    return (
    <div className="counter">

        <button onClick={upCount}>Up</button>
        <p>{count}</p>
        <button onClick={downCount}>Down</button>
            
        </div>
    )
}

