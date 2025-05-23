// pages/LandingPage.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import ModalWrapper from "../components/ModalWrapper";
import Login from "../components/Login";
import Register from "../components/Register";
import BtnMain from "../components/BtnMain";
import Copyright from "../components/Copyright";
import "../css/LandingPage.css";
import "../css/fonts.css";
import "../css/Login.css";
import "../css/Register.css";

const LandingPage = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("login");
  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);
  const switchToRegister = () => setModalContent("register");
  const switchToLogin = () => setModalContent("login");

  const bgURL = import.meta.env.VITE_BG_URL;

  // Rendering
  return (

  <div className="container">
    <iframe
      src={bgURL}
      frameBorder="0"
      allow="autoplay; fullscreen"
      allowFullScreen
      className="bgVid"
      style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100%',
            height: '100%', 
            zIndex: -1 
      }}
    ></iframe>

    {/* Hero Section */}
    <header className="header">
        <div className="hero">
            <img src={logo} className="logo" alt="noted" />
            <div className="btn-container">
                <BtnMain text="" onClick={openModal} />
            </div>
        </div>
    </header>

    {/* Modal */}
    <ModalWrapper
        className="model-backdrop"
        isVisible={isModalVisible}
        toggleModal={closeModal}
     >
        {modalContent === "login" ? (
             <Login
                navigate={navigate}
                switchToRegister={switchToRegister}
                closeModal={closeModal}
              />
         ) : (
             <Register
                navigate={navigate}
                switchToLogin={switchToLogin}
                closeModal={closeModal}
              />
         )}
    </ModalWrapper>

    {/* Footer Section */}
    <Copyright />
  </div>
  );
};

export default LandingPage;
