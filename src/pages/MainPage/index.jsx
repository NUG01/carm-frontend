import React, { useState } from "react";
import header from "../../components/Header";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import checkGuest from "../../guards/checkGuest";
import LogoSvg from "@/assets/icons/LogoSvg";
import LanguageDropdown from "../../components/Dropdowns/LanguageDropdown";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

function MainPage() {
  const [component, setComponent] = useState("login"); 
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}>

      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: -1,
          opacity: 0.75,
          overflowY: "hidden",
        }}>
        <LogoSvg />
      </div>

      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100vw",
          padding: "1rem",
          position: "absolute",
          height: "4rem",
          top: 0,
          left: 0,
        }}>
        <LanguageDropdown />
      </header>
      <div style={{
        width: '100vw',
        overflowX: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        {component === "login" && <LoginForm setComponent={setComponent} />}
        {component === "register" && <RegisterForm setComponent={setComponent} />}
      </div>
    </section>
  );
}

export default checkGuest(MainPage);
