import { Button, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import './Contact.css';

const Contect = () => {
    const[name,setName]=useState("")
    const[email,setEmail] = useState("")
    const[message,setMessage] = useState("");

    const contactFormHandler = (e)  =>{
        e.preventDefault();
    }


  return (
    <div className='contact'>
        <div className='contactRightBar'></div>
        <div className='contactContainer'>
            <form className='contactContainerForm' onSubmit={contactFormHandler}>
                <Typography variant='h4'>Contact Us</Typography>
                <input type="text" value={name} placeholder='Name' onChange={(e)=> setName(e.target.value)} required/>
                <input type="email"value={email} placeholder='email' onChange={(e)=> setEmail(e.target.value)} required/>

                <textarea name="Message" id="" cols="30" rows="10" value={message} onChange={(e) => setMessage(e.target.value)} required ></textarea>
                <Button variant='contained' type='submit' >Send</Button>
            </form>
        </div>

    </div>
  )
}

export default Contect