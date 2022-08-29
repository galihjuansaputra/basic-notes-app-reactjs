import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ notes, onDelete }) {
  if (notes.length === 0) {
    return (
      <div className="container noteslist">
        <h2>Catatan Aktif</h2>
        <p>Tidak ada catatan.</p>
      </div>
    );
  } else {
    return (
      <div className="container noteslist">
        <h2>Catatan Aktif</h2>
        {notes.map((note) => (
          <NotesItem key={note.id} id={note.id} onDelete={onDelete} {...note} />
        ))}
      </div>
    );
  }
}

export default NotesList;
