import React from "react";
import DeleteIcon from '@mui/icons-material/DeleteSharp';

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <button onClick={() => { return props.onDelete(props.id) }}><DeleteIcon /></button>
    </div>
  );
}

export default Note;
