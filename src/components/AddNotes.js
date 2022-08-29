import React from "react";

class AddNotes extends React.Component{

  render(){
    return (
      <div className="container addnotes">
        <h2>Buat Catatan</h2>
        <div className="notesform">
            <form>
                <input className="textbox" type="text" placeholder="ini adalah judul..." required/><br/>
                <textarea className="textarea" placeholder="tuliskan catatanmu disini..." required/>
                <button className="reset" type="reset">Reset</button>
                <button className="submit" type="submit">Submit</button>
            </form>
        </div>
      </div>
      
    );
  }
}

export default AddNotes;
