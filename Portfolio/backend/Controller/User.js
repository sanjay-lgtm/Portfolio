import { User } from "../model/User";
import Jwt from "jsonwebtoken";
import { sendMail } from "../Middleware/sendMail";
import cloudinary from 'cloudinary';

const stripe = require('stripe')('sk_test_51LmG7kBU08xNEusFc3LsyAnnZSgyhZQKNlVYdHB7v4yQRfG2shz0WzmE1NTMawwUjK4bZp5zpxnw02cIUnRinz3V00ioGFd1D1')

// --------------Login-----------------------------
export const login = async (req, res) => {

    try {
        const { email, password } = req.body;
        // console.log(req.body.email)
        const user = await User.findOne({ email })
        console.log(user)
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid email or Password",
            });
        }
        const token = Jwt.sign({ _id: user._id }, "sanjay");

        res.status(200).cookie("token", token, {
            expiresIn: "24h",
            httpOnly: true,
        }).json({
            success: true,
            message: "Logged in successfull",
            token: token
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        })
    }
};




// ---------------------Logout-------------------------------
export const logout = async (req, res) => {
    try {


        res.status(200).cookie("token", null, {
            expires: new Date(Date.now()),
            httpOnly: true,
        }).json({
            success: true,
            message: "Logout  successfull",

        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        })
    }
};

// ---------------getUser----------------------------------------
export const getUser = async (req, res) => {
    try {
        const user = await User.findOne().select("-password -email");

        res.status(200).json({
            success: true,
            user,
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        })

    }
};

// --------------------myprofile----------------------------
export const myprofile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        res.status(200).json({
            success: true,
            user,
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        })

    }
};

// ------------------Contact------------------------------
export const contact = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const userMessage = `Hey, I am ${name}. My email is ${email}. My message is ${message}.`;
        await sendMail(userMessage);
        return res.status(200).json({
            success: true,
            message: "Message send successfully"
        });

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        })

    }

};

// ------------------------updateUser------------------------------
export const updateUser = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);

        const { name, email, password, skills, about } = req.body;
        if (name) {
            user.name = name;
        }
        if (email) {
            user.email = email;
        }
        if (password) {
            user.password = password;
        }
        if (skills) {
            if (skills.image1) {

                await cloudinary.v2.uploader.destroy(user.skills.image1.public_id);
                const myCloud = await cloudinary.v2.uploader.upload(skills.image1, {
                    folder: "portfolio",
                })
                user.skills.image1 = {
                    public_id: myCloud.public_id,
                    url: myCloud.secure_url,
                }
            }
            if (skills.image2) {

                await cloudinary.v2.uploader.destroy(user.skills.image2.public_id);
                const myCloud = await cloudinary.v2.uploader.upload(skills.image2, {
                    folder: "portfolio",
                })
                user.skills.image2 = {
                    public_id: myCloud.public_id,
                    url: myCloud.secure_url,
                }
            }
            if (skills.image3) {

                await cloudinary.v2.uploader.destroy(user.skills.image3.public_id);
                const myCloud = await cloudinary.v2.uploader.upload(skills.image3, {
                    folder: "portfolio",
                })
                user.skills.image3 = {
                    public_id: myCloud.public_id,
                    url: myCloud.secure_url,
                }
            }
            if (skills.image4) {

                await cloudinary.v2.uploader.destroy(user.skills.image4.public_id);
                const myCloud = await cloudinary.v2.uploader.upload(skills.image4, {
                    folder: "portfolio",
                })
                user.skills.image4 = {
                    public_id: myCloud.public_id,
                    url: myCloud.secure_url,
                }
            }
            if (skills.image5) {

                await cloudinary.v2.uploader.destroy(user.skills.image5.public_id);
                const myCloud = await cloudinary.v2.uploader.upload(skills.image5, {
                    folder: "portfolio",
                })
                user.skills.image5 = {
                    public_id: myCloud.public_id,
                    url: myCloud.secure_url,
                }
            }
            if (skills.image6) {

                await cloudinary.v2.uploader.destroy(user.skills.image6.public_id);
                const myCloud = await cloudinary.v2.uploader.upload(skills.image6, {
                    folder: "portfolio",
                })
                user.skills.image6 = {
                    public_id: myCloud.public_id,
                    url: myCloud.secure_url,
                }
            }
        }
        if (about) {
            if (about.name) {
                user.about.name = about.name;
            }
            if (about.title) {
                user.about.title = about.title;
            }
            if (about.subtitle) {
                user.about.subtitle = about.subtitle;
            }
            if (about.description) {
                user.about.description = about.description;
            }
            if (about.quote) {
                user.about.quote = about.quote;

            }
            if (about.avatar) {
                await cloudinary.v2.uploader.destroy(about.avatar.public_id)

                const myCloud = await cloudinary.v2.uploader.upload(about.avatar, {
                    folder: "portfolio",
                });
                user.about.avatar = {
                    public_id: myCloud.public_id,
                    url: myCloud.secure_url
                }
            }
        }

        await user.save();

        res.status(200).json({
            success: true,
            message: "User Updated"
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        })

    }

}

// ------------------------addTimeLine-----------------------
export const addTimeLine = async (req, res) => {
    try {
        const { title, description, date } = req.body;
        const user = await User.findById(req.user._id);

        user.timeline.unshift({
            title,
            description,
            date
        })
        await user.save();


        res.status(200).json({
            success: true,
            message: "Added to Timeline",
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        })

    }
};


// ----------------------------addYoutube----------------------------------

export const addYoutube = async (req, res) => {
    try {
        const { url, title, image } = req.body;
        const user = await User.findById(req.user._id);
        const myCloud = await cloudinary.v2.uploader.upload(image, {
            folder: "portfolio",
        })
        user.youtube.unshift({
            url,
            title,
            image: {
                public_id: myCloud.public_id,
                url: myCloud.secure_url,
            }
        })
        await user.save();


        res.status(200).json({
            success: true,
            message: "Added to youtube",
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        })

    }
};


// -----------------------addProject-----------------------------
export const addProject = async (req, res) => {
    try {
        const { url, title, image, description, techStack } = req.body;
        const user = await User.findById(req.user._id);
        const myCloud = await cloudinary.v2.uploader.upload(image, {
            folder: "portfolio",
        })
        user.projects.unshift({
            url,
            title,
            description,
            techStack,
            image: {
                public_id: myCloud.public_id,
                url: myCloud.secure_url,
            }
        })
        await user.save();


        res.status(200).json({
            success: true,
            message: "Added to Projects",
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        })

    }
};


// ------------------------deleteTimeLine--------------------------------------------
export const deleteTimeLine = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(req.user._id);

        user.timeline = user.timeline.filter((item) => item._id != id)




        await user.save();


        res.status(200).json({
            success: true,
            message: "Delete to Timeline",
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        })

    }
};


// -------------------------------------deleteYoutube----------------------------------------------------

export const deleteYoutube = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(req.user._id);

        const vedio = user.youtube.find((vedio) => vedio._id == id)

        await cloudinary.v2.uploader.destroy(vedio.image.public_id)

        user.youtube = user.youtube.filter((vedio) => vedio._id != id)




        await user.save();


        res.status(200).json({
            success: true,
            message: "Delete to youtube",
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        })

    }
};



// -----------------------------deleteProject----------------------------------------------


export const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findById(req.user._id);

        const project = user.projects.find((item) => item._id == id);

        await cloudinary.v2.uploader.destroy(project.image.public_id);

        user.projects = user.projects.filter((item) => item._id != id);

        await user.save();

        res.status(200).json({
            success: true,
            message: "Deleted from Projects",
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};





// ---------------------------------------Payment----------------------

export const payment = async (req, res) => {

 

    // console.log("req.body",req.body)

    const session = await stripe.checkout.sessions.create({

        line_items: [

            {

                price_data: {

                    currency: 'usd',

                    product_data: {

                        name: "sanjay",

                    },

                    unit_amount: 800,

                },

                quantity: 1,

            },

        ],

        mode: 'payment',

        success_url: 'https://example.com/success',

        cancel_url: 'https://example.com/cancel',

    });

    console.log("session", session)

    // res.send({url: session.url});

    res.send({ status: 200, message: "SUCCESS", result: session })

}