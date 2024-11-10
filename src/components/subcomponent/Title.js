import React from 'react';

function Title({ title, setTitle }) {
  return (
    <div className="flex-column">
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
    </div>
  );
}

export default Title;
