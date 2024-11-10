import React from 'react';
import axios from 'axios';

function Submit({ title, description, setTitle, setDescription }) {
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title: title,
      description: description,
    };
     
     // Check if the form fields are empty
     if (!formData.title || !formData.description) {
      alert('Please fill in all fields');
      return;  // Prevent submission if any field is empty
  }
    try {
      // Send a POST request to the Spring Boot backend
      const response = await axios.post('http://localhost:8080/api/submit', formData, {
        headers: {
          'Content-Type': 'application/json', // Ensure the backend knows this is JSON
        },
      });

    

      if (response.status === 200) {
        alert('Form submitted successfully!');
        setTitle(''); // Clear the title input field after submit
        setDescription(''); // Clear the description input field after submit
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form.');
    }
  };

  return (
    <div class="d-flex flex-column justify-content-center align-items-center">
      <button type="button" className="btn btn-primary mt-4 " onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Submit;
