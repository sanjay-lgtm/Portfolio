
import axios from "axios";
import { getHeader } from "./Auth.header";
const TOKEN = getHeader();
console.log("token", TOKEN)

const API_URL = "http://localhost:7625/";


const axiosConfig = {

    headers: {
        "Content-Type": "application/json",
        "Authorization":TOKEN

    }


}


export const getUser = () => async (dispatch) => {
    try {
        dispatch({
            type: "GET_USER_REQUEST",
        });

        const { data } = await axios.get(API_URL + "api/v1/user");

        dispatch({
            type: "GET_USER_SUCCESS",
            payload: data.user,
        });
    } catch (error) {
        dispatch({
            type: "GET_USER_FAILURE",
            payload: error.response.data.message,
        });
    }
};

// --------------------login-----------------------------------------------
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: "LOGIN_REQUEST",
        });

        const { data } = await axios.post(API_URL + "api/v1/login",
            {
                email,
                password,

            },axiosConfig


        );
        console.log("data", data)
        if (data.success === true) {
            localStorage.setItem('token', JSON.stringify(data.token));
        }

        dispatch({
            type: "LOGIN_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "LOGIN_FAILURE",
            payload: error.response.data.message,
        });
    }
};





// ----------------------------------logout------------------------------------------
export const logout = () => async (dispatch) => {
    try {
        dispatch({
            type: "LOGOUT_REQUEST",
        });

        const { data } = await axios.get(API_URL + "api/v1/logout");

        dispatch({
            type: "LOGOUT_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "LOGOUT_FAILURE",
            payload: error.response.data.message,
        });
    }
};



// ---------------------loaduser-------------------------
export const loadUser = () => async (dispatch) => {
    try {
        dispatch({
            type: "LOAD_USER_REQUEST",
        });

        const { data } = await axios.get(API_URL + "api/v1/me");

        dispatch({
            type: "LOAD_USER_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "LOAD_USER_FAILURE",
            payload: error.response.data.message,
        });
    }
};


// -----------------------------------updateUser--------------------------------
export const updateUser = (name, email, password, skills, about) => async (dispatch) => {
    try {
        dispatch({
            type: "UPDATE_USER_REQUEST",
        });

        const { data } = await axios.put(API_URL + "api/v1/admin/update",
            {
                name,
                email,
                password,
                skills,
                about,

            },axiosConfig
            );

        dispatch({
            type: "UPDATE_USER_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "UPDATE_USER_FAILURE",
            payload: error.response.data.message,
        });
    }
};

// ----------------------------TimeLine----------------------------

export const addTimeline = (title, description, date) => async (dispatch) => {
    try {
        dispatch({
            type: "ADD_TIMELINE_REQUEST",
        });

        const  data  = await axios.post(
            API_URL + "api/v1/admin/timeline/add",
            {
                title,
                description,
                date,
            },
            axiosConfig
        );

        dispatch({
            type: "ADD_TIMELINE_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "ADD_TIMELINE_FAILURE",
            payload: error.response.data.message,
        });
    }
};



// -------------------------deleteTimeline---------------------------
export const deleteTimeline = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "DELETE_TIMELINE_REQUEST",
        });

        const { data } = await axios.delete(API_URL + `api/v1/admin/timeline/${id}`,axiosConfig);

        dispatch({
            type: "DELETE_TIMELINE_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "DELETE_TIMELINE_FAILURE",
            payload: error.response.data.message,
        });
    }
};


// -------------------------------addYoutube---------------------------------------------

export const addYoutube = (title, url, image) => async (dispatch) => {
    try {
        dispatch({
            type: "ADD_YOUTUBE_REQUEST",
        });

        const { data } = await axios.post(
            API_URL + "api/v1/admin/youtube/add",
            { title, url, image },
            axiosConfig
        );

        dispatch({
            type: "ADD_YOUTUBE_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "ADD_YOUTUBE_FAILURE",
            payload: error.response.data.message,
        });
    }
};



// ----------------------------------deleteYoutube---------------------------------------  
export const deleteYoutube = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "DELETE_YOUTUBE_REQUEST",
        });

        const { data } = await axios.delete(API_URL + `api/v1/admin/youtube/${id}`,axiosConfig);

        dispatch({
            type: "DELETE_YOUTUBE_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "DELETE_YOUTUBE_FAILURE",
            payload: error.response.data.message,
        });
    }
};

// -------------------------------addProject----------------------------------------------
export const addProject =
    (title, url, image, description, techStack) => async (dispatch) => {
        try {
            dispatch({
                type: "ADD_PROJECT_REQUEST",
            });

            const { data } = await axios.post(
                "api/v1/admin/project/add",
                { title, url, image, description, techStack },axiosConfig
            );

            dispatch({
                type: "ADD_PROJECT_SUCCESS",
                payload: data.message,
            });
        } catch (error) {
            dispatch({
                type: "ADD_PROJECT_FAILURE",
                payload: error.response.data.message,
            });
        }
    };



// ---------------------------------deleteProject-----------------------------------    

export const deleteProject = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "DELETE_PROJECT_REQUEST",
        });

        const { data } = await axios.delete(`api/v1/admin/project/${id}`,axiosConfig);

        dispatch({
            type: "DELETE_PROJECT_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "DELETE_PROJECT_FAILURE",
            payload: error.response.data.message,
        });
    }
};

// export const contactUs = (name, email, message) => async (dispatch) => {
//     try {
//         dispatch({
//             type: "CONTACT_US_REQUEST",
//         });

//         const { data } = await axios.post(
//             "/api/v1/contact",
//             { name, email, message },
//             {
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//             }
//         );

//         dispatch({
//             type: "CONTACT_US_SUCCESS",
//             payload: data.message,
//         });
//     } catch (error) {
//         dispatch({
//             type: "CONTACT_US_FAILURE",
//             payload: error.response.data.message,
//         });
//     }
// };




