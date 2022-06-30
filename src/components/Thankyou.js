import React from 'react'
import { useParams } from 'react-router-dom';
import '../css/style.css'


function Thankyou(props) {
  
  const {username, comment} =useParams();
  
  console.log(props.auth)
  console.log(props.username)

  return (

      <div>

        <h1>Thank You &nbsp; {username}</h1>
        <p className = "result">We appreciate your comments: {comment}</p>
      </div>

  );
}

export default Thankyou;