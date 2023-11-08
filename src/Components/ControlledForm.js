import React, { useState } from 'react'

const ControlledForm = ({onSubmit}) => {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');




  return (
    <form onSubmit={(e) => onSubmit(name, email, password)}>
    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
    <button type="submit">Register</button>
  </form>
  )
}

export default ControlledForm