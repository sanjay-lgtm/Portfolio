import { Typography } from '@mui/material'
import { Link } from "react-router-dom";
import React from 'react'
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <Typography variant="h5">About Me</Typography>
                <Typography>
                    Hey, my name is Abhishek Singh. I am a Full-Stack Developer and a
                    tutorial on Youtube channel called <b> 6 Pack Programmer</b>
                </Typography>

                <Link to="/contact" className="footerContactBtn">
                    <Typography>Contact Us</Typography>
                </Link>
            </div>
            <div>
                <Typography variant="h6">Social Media</Typography>
                <a href="https://github.com/sanjay-lgtm/crm.git" target="black">
                    <BsGithub />
                </a>
                <a href="https://www.youtube.com/channel/UCgl9rHdm9KojNRWs56QI_hg/" target="black">
                    <BsYoutube />
                </a>
                <a href="https://instagram.com/meabhisingh/" target="black">
                    <BsInstagram />
                </a>
                <a href="https://www.linkedin.com/in/meabhisingh/" target="black">
                    <BsLinkedin />
                </a>

            </div>
        </div>
    )
}

export default Footer