import { createTransport } from "nodemailer"



export const sendMail = async (userMessage) => {
    const transporter = createTransport({
        host: process.env.SMPT_HOST,
        port: process.env.SMPT_PORT,
        auth: {
            user: process.env.SMPT_USER,
            pass: process.env.SMPT_PASS,
        }
    })
    await transporter.sendMail({subject:"hi sanjay",to:process.env.MYMAIL,from:process.env.MYMAIL  ,text})
}