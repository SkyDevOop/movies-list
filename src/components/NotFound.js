import React from "react";
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
 
      <div className="Not-Found text-light text-center d-flex flex-column justify-content-center align-items-center">
        <h2>We can't find that movie</h2>
        <p className="py-3">
          We're fairly sure that page used to be here, but seems to have gone
          missing. We do apologise on it's behalf.
        </p>
      </div>
  );
};

export default NotFound;
