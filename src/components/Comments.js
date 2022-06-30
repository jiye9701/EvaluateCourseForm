import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css'

function Comments(props) {
  //state variable
  const [courseCode, setCode] = useState('');
  const [courseName, setName] = useState('');
  const [favTopic, setTopic] = useState('');
  const [favAssignment, setAssignment] = useState('');
  const [comment, setComment] = useState('');

  // read the info from props, coming from the ancestor component
  console.log(props.auth)


  // data update
  const handleCode = (event) => {
    setCode(event.target.value);
  }

  const handleName = (event) => {
    setName(event.target.value);
  }

  const handleTopic = (event) => {
    setTopic(event.target.value);
  }

  const handleAssignment = (event) => {
    setAssignment(event.target.value);
  }

  const handleComment = (event) => {
    setComment(event.target.value);
  }

  return (
    <div>
      <div>
        <form>
          <br />
          <br />
          <b><label for = "ccode">Course Code: &nbsp;&nbsp;</label></b>
          <input
            type = "text"
            name = "ccode"
            id = "ccode"
            value = {courseCode}
            onChange = {handleCode}
          />
          <br />
          <br />
          <b><label for = "cname">Course Name: &nbsp;&nbsp;</label></b>
          <input
            type = "text"
            name = "cname"
            id = "cname"
            value = {courseName}
            onChange = {handleName}
          />
          <br />
          <br />
          <b><label for = "email">Student Email: &nbsp;&nbsp;</label></b>
          <input
            type = "email"
            name = "email"
            id = "email"
            value = {props.username}
          />
          <br />
          <br />
          <b><label for = "ftopic">Favorite topic: &nbsp;&nbsp;</label></b>
          <input
            type = "text"
            name = "ftopic"
            id = "ftopic"
            value = {favTopic}
            onChange = {handleTopic}
          />
          <br />
          <br />
          <b><label for = "fasgmt">Favorite assignment: &nbsp;&nbsp;</label></b>
          <input
            type = "text"
            name = "fasgmt"
            id = "fasgmt"
            value = {favAssignment}
            onChange = {handleAssignment}
          />
          <br />
          <br />
          <b><label for = "comment">Your Comments: &nbsp;&nbsp;</label></b>
          <textarea
            name = "comment"
            id = "comment"
            value = {comment}
            onChange = {handleComment}
          />
          <br />
          <br />
  
        <br />
        <br />
        
        {/* use back tick not apostrophe */}
        <Link exact to = {`/Thankyou/${props.username}/${comment}`}>
          <button>
            Submit
          </button>
        </Link>

        <br />
        <br />
        </form>
      </div>
      
    </div>
  );
}

export default Comments;