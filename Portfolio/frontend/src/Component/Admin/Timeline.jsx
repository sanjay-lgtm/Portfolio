import { useSelector } from 'react-redux';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { getUser } from '../../actions/user';
import React from 'react'
import { FaTrash } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { MdKeyboardBackspace } from 'react-icons/md';
import { useDispatch } from 'react-redux'
import { addTimeline, deleteTimeline } from '../../actions/user';

const Timeline = () => {
    const { message, error, loading, user } = useSelector((state) => state.update);

    const alert = useAlert();
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault(e);
        await dispatch(addTimeline(title, description, date));
        dispatch(getUser());

    };
    const deleteHandler = async (id) => {
        await dispatch(deleteTimeline(id));
        dispatch(getUser());
    };


    useEffect(() => {
        if (error) {
            // alert.error(error);
            dispatch({ type: "CLEAR_ERRORS" });
        }
        if (message) {
            alert.success(message);
            dispatch({ type: "CLEAR_MESSAGE" });
        }

    }, [alert, error, message, dispatch]);



    return (
        <div className='adminPanel'>
            <div className='adminPanelContainer'>
                <Typography variant="h4">
                    <p>A</p>
                    <p>D</p>
                    <p>M</p>
                    <p>I</p>
                    <p style={{ marginRight: "1vmax" }}>N</p>

                    <p>P</p>
                    <p>A</p>
                    <p>N</p>
                    <p>E</p>
                    <p>L</p>

                </Typography>
                <form onSubmit={submitHandler} >
                    <input type="text"
                        placeholder='Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="adminPanelInputs"

                    />
                    <input type="text"
                        placeholder='description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="adminPanelInputs"

                    />
                    <input type="date"
                        placeholder='date'
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="adminPanelInputs"

                    />

                    <Link to="/Account">
                        BACK<MdKeyboardBackspace />
                    </Link>


                    <Button type="submit" variant="contained" disabled={loading}>Add</Button>
                </form>

                <div className="adminPanelYoutubeVideos">
                    {user &&
                        user.timeline &&
                        user.timeline.map((item) => (
                            <div className="youtubeCard" key={item._id}>
                                <Typography variant="h6">{item.title}</Typography>
                                <Typography variant="body1" style={{ letterSpacing: "2px" }}>
                                    {item.description}
                                </Typography>
                                <Typography variant="body1" style={{ fontWeight: 600 }}>
                                    {item.date.toString().split("T")[0]}
                                </Typography>

                                <Button
                                    style={{
                                        margin: "auto",
                                        display: "block",
                                        color: "rgba(40,40,40,0.7)",
                                    }}
                                    onClick={() => deleteHandler(item._id)}
                                >
                                    <FaTrash />
                                </Button>
                            </div>
                        ))}
                </div>
            </div>

        </div>
    )
}

export default Timeline