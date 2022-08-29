import React from "react";
import { showFormattedDate } from "../utils/data";

function NotesItemBody({ title, createdAt, body }) {
  return (
    <div>
      <h3>{title}</h3>
      <p className="notes-tanggal">{showFormattedDate(createdAt)}</p>
      <div className="notes-body">
        <p>{body}</p>
      </div>
    </div>
  );
}

export default NotesItemBody;
