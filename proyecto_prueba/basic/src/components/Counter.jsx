import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>El contador esta en {count}</p>
            <button onClick={() => setCount(count + 1)}>Agregar</button>
            <button onClick={() => setCount(count - 1)}>Restar</button>
        </div>
    )
}

export { Counter };