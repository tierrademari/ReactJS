import { useEffect, useState } from 'react'

const CounterWithEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`El contador cambio a: ${count}`)
    }, [count])

    return (
        <div>
            <p>El contador esta en {count}</p>
            <button onClick={() => setCount(count + 1)}>Revise la consola</button>
        </div>
    )
}

export { CounterWithEffect };