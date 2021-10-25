import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notesList, setNotesList] = useState([]);

  function addNewNote(newNote) {
    setNotesList((prevNotesList) => {
      return [...prevNotesList, newNote];
    });
  };
  function deleteNote(id) {
    setNotesList((prevNotesList) => {
      console.log(prevNotesList, id);
      return prevNotesList.filter((item, index) => {
        return index !== id;
      });
    })
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNewNote} />
      {notesList.map((noteContent, index) => {
        return <Note
          id={index}
          key={index}
          title={noteContent.title}
          text={noteContent.text}
          onDelete={deleteNote}
        />
      })}
      <Footer />
    </div>
  );
}

export default App;
