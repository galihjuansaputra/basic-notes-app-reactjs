import React from "react";
import Header from "./Header";
import AddNotes from "./AddNotes"
import NotesList from "./NotesList";
import Footer from "./Footer";

class NotesApp extends React.Component{

  render(){
    return (
        <>
            <Header/>
            <AddNotes/>
            <NotesList/>
            <Footer/>
        </>
    );
  }
}

export default NotesApp;
