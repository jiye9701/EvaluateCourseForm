import Comments from './Comments';
import '../css/style.css'
//
import React, { useState } from 'react';
//
function Login() {

     //state variable for the screen
     const [auth, setAuth] = useState('auth');

 //Create state variables to store login credentials:
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  // simple "authentication" method
  const authenticateUser = async () => {
    try {
      //
      console.log(username)
      console.log(password)
      //verify the credentials (just hardcoding here)
      if (username === 'jyu159@my.centennialcollege.ca' && password === '123') {
        setAuth('authenticated'); // update the state
        console.log(auth);
      }
    } catch (e) { //print the error
      console.log(e);
    }
  
  };//
  
  return (
    // if wrong, still show the line 33 to 52
    <div className="App">
      <form>
      {auth !== 'authenticated' 
        ? <div className ="container">

           <p>
             <h1>Login to evaluate the course: </h1>
             </p>
             
            <div className="container">
              <label>Email: </label>
              <input type="text" className = "fields" onChange={e => setUsername(e.target.value)} />
            </div>
            <div className="container">
              <label>Password: </label>
              <input type="password" className = "fields"  onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="container">
              <button className="form-field-no-caption" onClick={authenticateUser}>Login</button>
            </div>

        </div>
        // after : = otherwise
        : <Comments auth={auth} username={username} />

      }
    </form>
    </div>



  );

}

export default Login;
