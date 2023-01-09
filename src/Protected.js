import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
  const { Component } = props;

  let navigate = useNavigate();

  let login = localStorage.getItem("login");

  useEffect(() => {
    if (!login) {
      navigate("/login");
    }
  });

  return (
    <div>
      <Component />
    </div>
  );
};

export default Protected;
