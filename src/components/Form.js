import React, { useState } from 'react';
import Title from './subcomponent/Title';  // Import Title Component
import Description from './subcomponent/Description';  // Import Description Component
import Submit from './subcomponent/Submit';  // Import Submit Component

function Form() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className='container d-flex flex-column align-items-center p-2 ' 
    style={{ background:"#D3D3D3" , color:"white",color:"#000080" }}>Add Note
      <form class=" mt-2 mb-2 p-2 rounded bg-light">
        <Title title={title} setTitle={setTitle} />
        <Description description={description} setDescription={setDescription} />
        <Submit title={title} description={description} setTitle={setTitle} setDescription={setDescription} />
      </form>
      </div>
  );
}

export default Form;
