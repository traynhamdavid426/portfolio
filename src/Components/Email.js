import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";




const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zc24e5m",
        "template_ir3hbfi",
        form.current,
        "ME4CZtu91ZjF7EGVw"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    
    <StyledContactForm >
      <form className="tc" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
  );
};

export default Email;


const StyledContactForm = styled.div`
 
  

    
   form {
    background: transparent;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 12px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    max-width:80%;
  min-height:200px;
    
    font-size: 20px;}

    input { 
    
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      box-shadow: 5px 5px gray 
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 8px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
      color: white;
    }

    input[type="submit"] {
      margin-top: 40px;
      cursor: pointer;
      background: aqua;
      color: black;
      font-weight:bold
      border: bold;
      box-shadow: 5px 5px gray ;
    }
  
  input: hover {transform: scale(1.1)}
 
`;