import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((mNote) => (
        <Note key={mNote.id} title={mNote.title} content={mNote.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
