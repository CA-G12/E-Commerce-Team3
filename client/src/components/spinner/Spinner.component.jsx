import React from 'react';
import ReactDOM from 'react-dom';
import './Spinner.css';
const Spinner = ({ loading }) => {
  if (!loading) return null;
  return (
    <div className="loader-container">
      <div className="spinner"></div>
    </div>
  );
  // return ReactDOM.createPortal(
  //   <div className="loader-container">
  //     <div className="spinner"></div>
  //   </div>,
  //   document.getElementById('root')
  // );
};

export default Spinner;
