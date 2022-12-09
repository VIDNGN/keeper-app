import React from "react";

// function createNote(mNote) {
//   return <Note key={mNote.id} title={mNote.title} content={mNote.content} />;
// }

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}
export default Note;
