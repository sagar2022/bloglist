import {useState} from 'react'

function Hello() {

const [name, setName] = useState("Emoz")

    return (
        <div>
            <h1>{name}</h1>
            <button onClick={()=>{setName("Sagar")}}>click me!</button>
        </div>
    )
}

export default Hello;
