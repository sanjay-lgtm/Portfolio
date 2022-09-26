import { Typography } from '@mui/material'
import sanjay from '../../Images/sanjay.jpg'
import React from 'react'
import './About.css'
const About = () => {
  return (
    <div className='about'>
        <div className='aboutContainer'>
            <Typography>This is a sample</Typography>

        </div>
        <div className='aboutContainer2'>
            <div>
                <img src={sanjay} alt="" 
                className='aboutAvatar'/>
                <Typography variant='h4'>Sanjay</Typography>
                <Typography variant='h4'>Full Stack Developer</Typography>
                <Typography>I am a Developer</Typography>
            </div>
            <div>
                <Typography>This is descrhfegffhfihdiufnf c cgkjcnd  buregfrefbh cbehibceib  jjiefn njeobf cv jihb </Typography>
            </div>

        </div>

    </div>
  )
}

export default About