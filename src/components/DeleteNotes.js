import React, { useContext } from 'react';
import { NotesContext } from '../context/NotesContext';

function DeleteNotes() {
  const { deleteAllNotes } = useContext(NotesContext);  // Access deleteAllNotes from context
  
  return (
    <div className="mt-2 p-2 rounded " style={{ background: "#D3D3D3", color: "#000080" }}>
      <button type="button" className="btn btn-danger " onClick={deleteAllNotes}>
        Delete All Notes
      </button>
    </div>
  );
}

export default DeleteNotes;
