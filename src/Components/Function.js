import React, { useState } from 'react';
const LoginForm = () => {

  const [formValue, setformValue] = useState({
    uname: "",
    password: ""
  });

  const [error, setError] = useState({
    uname: "",
    password: ""
  })
  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    //   console.log("submit alled")
    event.preventDefault();
    // const { uname, password } = formValue;
    // const errors = error;
    if (validateForm()) {

      setformValue({
        ...formValue,
        uname: "",
        password: ""
      });
      setError({
        ...error,
        uname: "",
        password: ""
      })
      alert("form submited")

    }
  }

  const validateForm = () => {
    //   console.log("val called")
    const { uname, password } = formValue;
    let { unameError, passError } = error;
    let formIsValid = true;
    if (uname.length == 0) {
      formIsValid = false;
      //   console.log("uanme enter")
      unameError = "enter the username";
    }
    if (!uname.match(/^[a-zA-Z]*$/)) {
      formIsValid = false;
      //   console.log("uanme valid enter")
      unameError = "enter the username field only with character";
    }
    if (password.length == 0) {
      // console.log("enter password")
      formIsValid = false;
      passError = "enter the password";
    }

    if (password.length < 8) {
      formIsValid = false;
      //   console.log("8 charater")
      passError = "password contain atleast 8 character";
    }
    setError({
      ...error, uname: unameError,
      password: passError
    })
    return formIsValid
  }
  return (
    <div className='App'>
    <form onSubmit={handleSubmit}>
      <h1>Login Using Function</h1>
      <label>Username</label><br/>
      <input type="text" name="uname" value={formValue.uname}
        onChange={handleChange}
      /><br />
      <div className='error'>{error.uname}</div>
      <label>Password</label><br/>
      <input type="password" name="password" value={formValue.password}
        onChange={handleChange}
      /><br />
      <div className='error'>{error.password}</div>
      <input type="submit" value=" Login"/>
    </form>
    </div>
  )
};

export default LoginForm;