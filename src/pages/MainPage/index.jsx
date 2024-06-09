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
  const [component, setComponent] = useState("login"); // ["login", "register"]"
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: "1rem",
          position: "absolute",
          height: "4rem",
          top: 0,
          left: 0,
        }}>
        <LanguageDropdown />
      </header>
      <div>
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
        {component === "login" && <LoginForm />}
        {component === "register" && <RegisterForm />}
        <div
          onClick={() => {
            setComponent(component === "login" ? 'registration': 'login');
          }}
          style={{
            color: "#000",
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            cursor: "pointer",
            transform: "translate(-1rem, -2rem)",
          }}>
          <span
            style={{
              color: "blue",
            }}>
            {component === "login" ? t("registration"): t("login")}
          </span>
        </div>
      </div>
    </section>
  );
}

export default checkGuest(MainPage);
