import React, { useState } from 'react'

const ControlledForm = ({onGetData}) => {


// state
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');



// function
  const onSubmitData = (e) => {
        e.preventDefault();

        const dataObj = {
          name, email, password
        }

        // passing in a function from a parent and lifting the object up
        onGetData(dataObj)


        // reset value
        setName('');
        setEmail('');
        setPassword('');
  }


  return (
    <form onSubmit={onSubmitData}>
    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
    <button type="submit">Register</button>
  </form>
  )
}

export default ControlledForm