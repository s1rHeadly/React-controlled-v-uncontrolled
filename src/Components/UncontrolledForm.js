import React, {useRef } from 'react';

const UncontrolledForm = () => {

  //refs MUST BE declared outside of functions like state etc
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);



  // functions
  // =================
  const handleSubmit = (event) => {
    event.preventDefault();


    // Get the values from the rev
    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;


    const data = {
      name, email, password
    }

    console.log(data)
    // we can pass in a prop here from a parent conpoment to lift the data out

    // Reset input fields
    nameInputRef.current.value = '';
    emailInputRef.current.value = '';
    passwordInputRef.current.value = '';

    // Additional registration logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" ref={nameInputRef} />
      <input type="email" placeholder="Email" ref={emailInputRef} />
      <input type="password" placeholder="Password" ref={passwordInputRef} />
      <button type="submit">Register</button>
    </form>
  );

  }


export default UncontrolledForm;