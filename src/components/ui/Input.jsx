import React from 'react';
import './UI.css';

const Input = (props) => {
  return (
    <div style={{ marginBottom: '15px' }}>
      <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>{props.label}</label>
      <input 
        type={props.type || "text"} 
        className="input-field" 
        placeholder={props.placeholder} 
      />
    </div>
  );
};

export default Input;
