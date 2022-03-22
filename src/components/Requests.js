import React, { useState } from 'react'
import { CustomRequestBoxProps } from './CustomRequestBoxProps'
import customimg from './customreqimg.jpg'
import customimg2 from './customreqimg2.jpg'
import customimg3 from './customreqimg3.jpg'
import { send } from 'emailjs-com'


export const Requests = () => {

  const [sender_name, set_sender_name] = useState('');
  const [sender_email, set_sender_email] = useState('');
  const [message, set_message] = useState('');

  const handleName = (e) => {
    set_sender_name(e.target.value)
  }

  const handleEmail = (e) => {
    set_sender_email(e.target.value)
  }

  const handleMessage = (e) => {
    set_message(e.target.value)
  }

  const sendMail = (e) => {
    e.preventDefault();
    send(
      'service_i9ndmfs',
      'template_eysd9ts',
      {sender_name, sender_email, message},
      '-B21PwgLTTYtMLUmE'
    )
    .then((response)=> {
      console.log("sent", response.status, response.text)
    }) 
    .catch((err) => {
      console.log('failed', err)
    })
    set_sender_name('');
    set_sender_email('');
    set_message('');
    alert("Message Sent")
  }



  return (
    <>
    <div className='requests' >
        <div className='requestsbody'>
        <h1>Have an Idea for a Tool?</h1>
        <div className='custombox'>
          <CustomRequestBoxProps
          name="Trading & Fintech Solutions"
          url={customimg}
          desc="We develop solutions to improve your trading experience."
          >

          </CustomRequestBoxProps>
          <CustomRequestBoxProps
          name="Custom Indicator & Scanner Development"
          url={customimg2}
          desc="We are experts in designing indicators & scanners for your needs."
          >

          </CustomRequestBoxProps>
          <CustomRequestBoxProps
          name="Custom Algo, EA & Trading Robot"
          url={customimg3}
          desc="We can build a custom algo or strategy to support your trading."
          >

          </CustomRequestBoxProps>
        </div>
        </div>
    </div>
    <div className='customcertificate'>
      <h3>
    JJOTRADING.COM IS YOUR MARKET PLACE FOR PROVEN INDICATORS AND TRADING TOOLS. 
        EVERY PRODUCT SOLD ON THIS SITE UNDERGOES A THOROUGH REVIEW PROCESS AND 
        IS USED BY TRADING PROFESSIONALS IN THEIR DAILY ROUTINE.
        </h3>
        </div>

        <div className='contactform'>
          
          <form onSubmit={sendMail}>
          <h1>Send In Your Request</h1> 
          <span>..or message us on Discord</span>
            <p>Name</p>
            <input type="text" name="sender_name" value={sender_name} onChange={handleName} required placeholder='Name'></input>
            <p>E-mail</p>
            <input type="email" name='sender_email' value={sender_email} onChange={handleEmail} required placeholder='E-mail'></input>
            <p>Your message to us</p>
            <textarea name='message' value={message} onChange={handleMessage} required placeholder='Message' />
            <button type="submit">Send</button>


          </form>
        </div>
        
    </>
  )
}
