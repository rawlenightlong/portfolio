import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Email() {
  const form = useRef();
 const [userName, setUserName] = useState('');
 const [userEmail, setUserEmail] = useState('');
 const [userMessage, setUserMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nm35b2f', 'template_6tv2iy9', form.current, 'Od4-oNJlxQREPBh3p')
      .then((result) => {
          console.log(result.text);
          alert("Message Sent!");
          setUserName('');
          setUserEmail('');
          setUserMessage('');
      }, (error) => {
          console.log(error.text);
      });

  };

  return (<>
    <h2 className='contactme' id='contact'>Contact Me!</h2>
    <div className="email">
        <div className="emailform">
        <form ref={form} onSubmit={sendEmail}>
            
            <input type="text" 
                name="user_name" 
                placeholder='Enter Full Name' 
                required
                value={userName}
                onChange={(e) => {
                    setUserName(e.target.value)
                }}/><br></br>

            <input type="email" name="user_email" placeholder='Enter Email Address' required value={userEmail} onChange={(e) => {
                setUserEmail(e.target.value)
            }}/><br></br>

            <textarea name="message" placeholder='Message' required value={userMessage} onChange={(e) => {
                setUserMessage(e.target.value)
            }}/><br></br>
            <input type="submit" value="Send Message" />
         </form>
         </div>
    </div>
    </>);
};