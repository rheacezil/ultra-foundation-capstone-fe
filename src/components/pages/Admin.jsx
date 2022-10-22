import React, { useEffect } from "react";
import AdminTab from "../AdminTab";
import NavigationBar from "../NavigationBar";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.email !== "admin@gmail.com") {
      navigate("/");
    }
  }, [navigate]);

  if (localStorage.email !== "admin@gmail.com") {
    return;
  }
  return (
    <>
      <NavigationBar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <AdminTab />
    </>
  );
}
