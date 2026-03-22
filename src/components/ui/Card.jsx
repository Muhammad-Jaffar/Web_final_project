import React from 'react';
import './UI.css';

const Card = (props) => {
  return (
    <div className="card">
      {props.children}
    </div>
  );
};

export default Card;
