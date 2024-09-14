import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: 'strider',
        email: 'fernando@google.com'
    })

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setformState({
            ...formState,
            [name] : value
        })
    }

    


    useEffect( ()=>{
        //console.log('useEffect called');
    } ,[]); //el segundo argumento es para que se llame con el arreglo de dependencias es vacio, es decir, una sola vez

    useEffect( ()=>{
        //console.log('formState changed');
    } ,[formState])

    useEffect( ()=>{
        //console.log('email changed');
    } ,[email])

  return (
    <>
    <h1>Formulario Simple</h1>
    <hr />
    <input
    type="text"
    className="form-control"
    placeholder="Username"
    name="username"
    value={username}
    onChange={ onInputChange}

    >
    </input>
    <input
    type="email"
    className="form-control mt-2"
    placeholder="fernando@google.com"
    name="email"
    value={email}
    onChange={onInputChange}
    >
    </input>

    {
        (username == 'strider2') && <Message></Message>
    }
    </>
  )
}
