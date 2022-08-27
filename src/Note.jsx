import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

const Note = (props) =>{


    const deletenote = () =>{
        props.deleteitem(props.id);
    };

    return(
        <div className="enote">
        <div className="note">
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <button className="btns" onClick={deletenote}>
        <DeleteIcon className="deleteicon" />
        </button>
        </div>
        </div>
    )
}

export default Note; 