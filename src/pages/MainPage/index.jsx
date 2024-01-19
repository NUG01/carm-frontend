import React, { useState } from "react";
import header from "../../components/Header/header";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import checkGuest from "../../guards/checkGuest";

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
      <header></header>
      <div>
        {component === "login" && <LoginForm />}
        {component === "register" && <RegisterForm />}
        <div
          onClick={() => {
            setComponent(component === "login" ? "register" : "login");
          }}
          style={{
            color: "#000",
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginTop: "1rem",
            cursor: "pointer",
          }}>
          <span
            style={{
              color: "blue",
            }}>
            {component === "login" ? "რეგისტრაცია" : "ანგარიშზე შესვლა"}
          </span>
        </div>
      </div>
    </section>
  );
}

export default checkGuest(MainPage);
