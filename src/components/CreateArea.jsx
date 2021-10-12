import React, { useState } from "react";
import InputField from "./InputField";
import TextArea from "./TextArea";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [noteContent, setNoteData] = useState({
    title: "",
    text: ""
  });
  const [isHiden, setHiden] = useState(true);

  function handleValue(event) {
    const { value, name } = event.target;

    setNoteData((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    })
  };
  function expandContentArea() {
    setHiden(false)
  }

  return (
    <div>
      <form>
        <div>
          {!isHiden ? (
            <InputField
              onChange={handleValue}
              value={noteContent.title}
            />
          ) : null}
        </div>
        <TextArea
          onClick={expandContentArea}
          onChange={handleValue}
          value={noteContent.text}
          rows={isHiden ? 1 : 3}
        />
        <Zoom in={!isHiden}>
          <Fab
            sx={{
              position: "absolute",
              backgroundColor: "#f5ba13"
            }}
            size="small"
            // TODO: After add new note the contentArea should be reset to the initial state. Ready for next adding
            onClick={(event) => {
              event.preventDefault();
              setNoteData({ title: "", text: "" });
              return props.onAdd(noteContent)
            }}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  )
}

export default CreateArea;
