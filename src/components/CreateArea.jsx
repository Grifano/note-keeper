import React, { useState } from "react";
// import notesStore from "../notesStore";

function CreateArea(props) {
  const [noteContent, setNoteData] = useState({
    title: "",
    text: ""
  });

  function handleValue(event) {
    const { value, name } = event.target;

    setNoteData((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    })
  };

  return (
    <div>
      <form>
        <input onChange={handleValue} name="title" placeholder="Title" value={noteContent.title} />
        <textarea onChange={handleValue} name="text" placeholder="Take a note..." rows="3" value={noteContent.text} />
        <button onClick={(event) => {
          event.preventDefault();
          setNoteData({ title: "", text: "" });
          return props.onAdd(noteContent)
        }}>Add</button>
      </form>
    </div>
  )
}

export default CreateArea;
