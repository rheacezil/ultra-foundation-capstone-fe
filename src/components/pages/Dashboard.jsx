import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../NavigationBar";

export default function Dashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.email) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <div id="dashboard">
        <NavigationBar />
        <br />
        <br />
        <br />
        <br />
        <h1>Welcome to your dashboard!</h1>
      </div>
    </>
  );
}
