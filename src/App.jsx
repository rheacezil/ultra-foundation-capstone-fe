// import { useAuthState } from "react-firebase-hooks/auth";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminFundraisers from "./components/AdminFundraisers";
import AdminPrograms from "./components/AdminPrograms";

import AboutUs from "./components/pages/AboutUs";
import Admin from "./components/pages/Admin";
import Login from "./components/pages/authentication/Login";
import Signup from "./components/pages/authentication/Signup";
import Dashboard from "./components/pages/Dashboard";
import Homepage from "./components/pages/HomePage";
import LandingPage from "./components/pages/LandingPage";
import TestingPage from "./components/pages/TestingPage";
import { Hearts } from "react-loader-spinner";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AcyEj6OMQH2qyhbcm4fsVqF0Q3h-iT-CWiWT9-CcS6hlvoROVejX8CeFYyJ1DvKK7MLli_5LG2ZC0Ih6",
      }}
    >
      <div className="App">
        {loading ? (
          <div className="bg-warning d-flex justify-content-center align-items-center vh-100">
            <Hearts
              height="200"
              width="250"
              color="#111111"
              ariaLabel="hearts-loading"
              visible={true}
            />
          </div>
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/fundraiser" element={<AdminFundraisers />} />
              <Route path="/program" element={<AdminPrograms />} />
              <Route path="/homepage" element={<Homepage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/test" element={<TestingPage />} />
            </Routes>
          </BrowserRouter>
        )}
      </div>
    </PayPalScriptProvider>
  );
}

export default App;
