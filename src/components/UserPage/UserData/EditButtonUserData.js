import React, { useState } from 'react';

const EditButtonUserData = ({ initialValue }) => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(initialValue);

  const handleButtonClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setEditing(false);
  };

  const handleCancelClick = () => {
    setValue(initialValue);
    setEditing(false);
  };

  const handleChange = event => {
    setValue(event.target.value);
  };

  if (editing) {
    return (
      <div>
        <input type="text" value={value} onChange={handleChange} />
        <button onClick={handleSaveClick}>Save</button>
        <button onClick={handleCancelClick}>Cancel</button>
      </div>
    );
  } else {
    return (
      <div>
        <span>{value}</span>
        <button onClick={handleButtonClick}>Edit</button>
      </div>
    );
  }
};

export default EditButtonUserData;
