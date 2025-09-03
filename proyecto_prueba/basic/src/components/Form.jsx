import { useState } from "react";

const Form = () => {
    const [name,setName] = useState("");

    return (
        <>
        <form>
            <input type="text" placeholder="Ingresa tu nombre" value={name} 
            onChange={(event) => setName(event.target.value)}/>
        </form>

        <h2>Hola, {name || 'Visitante'}</h2>
        </>
    );
}

export { Form }