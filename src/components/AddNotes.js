import React from "react";

class AddNotes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.input(this.state);
  }

  render() {
    return (
      <div className="container addnotes">
        <h2>Buat Catatan</h2>
        <div className="notesform">
          <form onSubmit={this.onSubmitEventHandler}>
            <input
              value={this.state.title}
              onChange={this.onTitleChangeEventHandler}
              className="textbox"
              type="text"
              placeholder="ini adalah judul..."
              required
            />
            <br />
            <textarea
              value={this.state.body}
              onChange={this.onBodyChangeEventHandler}
              className="textarea"
              placeholder="tuliskan catatanmu disini..."
              required
            />
            <button className="submit" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddNotes;
