import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import BookingForm from "./pages/BookingForm";
import Dashboard from "./pages/Dashboard";
import LoginForm from "./components/LoginForm";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [page, setPage] = useState("home");

  const handleLogin = () => {
    setLoggedIn(true);
    setShowLogin(false);
  };

  return (
    <Layout>
      <Header
        onLoginClick={() => setShowLogin(true)}
        onNav={setPage}
        loggedIn={loggedIn}
      />
      {showLogin ? (
        <LoginForm
          onSuccess={handleLogin}
          onClose={() => setShowLogin(false)}
        />
      ) : page === "home" ? (
        <Home onBook={() => setPage("booking")} />
      ) : page === "booking" ? (
        <BookingForm />
      ) : page === "dashboard" ? (
        <Dashboard />
      ) : null}
      <Footer />
    </Layout>
  );
}

export default App;
