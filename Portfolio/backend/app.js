// import express from 'express';
// import cors from 'cors'
// import cloudinary from 'cloudinary';
// const app = express();

// import { createmongoconnection } from './db'
// createmongoconnection();
// cloudinary.v2.config({
//     cloud_name:"",
//     api_key:"",
//     api_secret:"",
// })

// import cookieParser from 'cookie-parser';
// import bodyParser from 'body-parser';
// import { userRouter } from './Route/User';
// app.use(cors({origin:"*"}));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }))
// app.use(express.json({limit:"50mb"}))
// app.use(express.urlencoded({extended:true,limit:"50mb"}))
// app.use(cookieParser());
// app.use("/api/v1",userRouter);

// export default app;




// -------------------for smartdata--------------------------------

import express from 'express';
const app = express();
import cloudinary from 'cloudinary';
import bodyParser from 'body-parser';
import cors from 'cors'
import cookieParser from 'cookie-parser';

cloudinary.v2.config({
    cloud_name: "dd5bgai03",
    api_key: "949416146912552",
    api_secret: "2GNQfUQrEUaX3MtAd3eZ_6iavtE",
})
import { userRouter } from './Route/User';

import { mongoconnection } from './db';
mongoconnection();
app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.json({ limit: "50mb" }))
app.use(express.urlencoded({ extended: true, limit: "50mb" }))
app.use(cookieParser());
app.use("/api/v1", userRouter);


export default app;