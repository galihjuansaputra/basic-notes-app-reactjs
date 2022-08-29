import React from "react";

class NotesList extends React.Component{

  render(){
    return (
      <div className="container noteslist">
        <h2>Catatan Aktif</h2>
        <div className="notes-cards">
            <h3>Judul Disini</h3>
            <p className="notes-tanggal">Hari, 9 Bulan 2022</p>
            <div className="notes-body">
            <p>Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.
            Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.
            Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.
            </p>
            </div>
            <button className="hapus">Hapus</button>

        </div>
      </div>
      
    );
  }
}

export default NotesList;
