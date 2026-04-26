import React from "react";
import { useNavigate } from "react-router-dom";


const ArrowNavigation = () => {
  const navigate = useNavigate();

  return (
    <button className="arrow-button" onClick={() => navigate(-1)}>← Go Back</button>
  );
};

export default ArrowNavigation;