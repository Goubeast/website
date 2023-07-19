import "./FormStyles.css";

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form action="https://getform.io/f/ee4e2b8e-9ec1-451c-b4dd-48bab358e410" method="POST">
            <label>Your Name</label>
            <input type="text" name="name"></input>
            <label>Email</label>
            <input type="email" name="email"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here" name="message" />
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form