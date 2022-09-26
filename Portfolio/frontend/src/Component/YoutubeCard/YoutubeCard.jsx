import { Button,Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from "react-redux";
import { deleteYoutube } from '../../actions/user'
import { getUser } from '../../actions/user'
import { FaTrash } from 'react-icons/fa'
import './YoutubeCard.css'
const YoutubeCard = ({
    url = "https://www.youtube.com/channel/UCgl9rHdm9KojNRWs56QI_hg",
    title = "Title here",
    isAdmin = false,
    id,
    image, }) => {

    const dispatch = useDispatch();

    const deleteHandler = async (id) => {
        await dispatch(deleteYoutube(id));
        dispatch(getUser());
    };
    return (
        <div className="youtubeCard">
            <a href={url} target="blank">
                <img src={image} alt="Video" />
                <Typography>{title}</Typography>
            </a>
            {isAdmin && <Button
                style={{
                    margin: "auto",
                    display: "block",
                    color: "rgba(40,40,40,0.7)",
                }}
                onClick={() => deleteHandler(id)}
            >
                <FaTrash />
            </Button>}
        </div>
    )
}

export default YoutubeCard