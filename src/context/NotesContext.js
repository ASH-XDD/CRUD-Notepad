import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the context
export const NotesContext = createContext();

// Create a provider component
export function NotesProvider({ children }) {
  const [notes, setNotes] = useState([]);

  // Fetch notes from the backend when the component mounts
  useEffect(() => {
    axios.get('http://localhost:8080/api/notes')
      .then(response => setNotes(response.data))
      .catch(error => console.error('Error fetching notes:', error));
  }, []);

  // Function to delete all notes
  const deleteAllNotes = () => {
    axios.delete('http://localhost:8080/api/notes')
      .then(() => setNotes([]))  // Clear the notes in the frontend state
      .catch(error => console.error('Error deleting all notes:', error));
  };

  // Provide notes and deleteAllNotes to children
  return (
    <NotesContext.Provider value={{ notes, setNotes, deleteAllNotes }}>
      {children}
    </NotesContext.Provider>
  );
}
