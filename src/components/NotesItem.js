import React from "react";
import NotesItemBody from "./NotesItemBody";
import DeleteButton from "./DeleteButton";

function NotesItem({ title, createdAt, body, id, onDelete }) {
  return (
    <div className="notes-cards">
      <NotesItemBody title={title} body={body} createdAt={createdAt} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

export default NotesItem;
