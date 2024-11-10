import React, { useState, useContext } from 'react';
import { NotesContext } from '../context/NotesContext';

function GetNotes() {
  const { notes } = useContext(NotesContext);  // Access notes from context
  const [isVisible, setIsVisible] = useState(false);

  const handleShow = () => {
    setIsVisible(true); // Show the notes list
  };

  const handleHide = () => {
    setIsVisible(false); // Hide the notes list
  };

  return (
    <div
      className="container d-flex flex-column align-items-center p-2 mt-2"
      style={{ background: "#D3D3D3", color: "#000080" }}
    >
      <h2>Notes List</h2>

      {/* Button to show the notes */}
      <button
        type="button"
        className="btn btn-primary mt-4 mb-4"
        onClick={handleShow}
      >
        See Notes
      </button>

     

      {/* Conditionally render the list of notes */}
      {isVisible && (
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <h3>{note.title}</h3>
              <p>{note.description}</p>
            </li>
          ))}
        </ul>
      )}
       {/* Button to hide the notes */}
       <button
        type="button"
        className="btn btn-danger mt-4"
        onClick={handleHide}
      >
        Hide Notes
      </button>
    </div>
  );
}

export default GetNotes;
