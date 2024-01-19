import MainSpinner from "../../components/Spinners/MainSpinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import BasicAxios from "../../services/axios/BasicAxios";
import checkGuest from "../../guards/checkGuest";

function VerifyEmail() {
  const navigate = useNavigate();
  const urlString = window.location.href;

  const startIndex = urlString.indexOf("token=");

  const token = urlString.substring(startIndex + 6);

  const endIndex = token.indexOf("&");
  const finalToken = endIndex !== -1 ? token.substring(0, endIndex) : token;

  useEffect(() => {
    (async () => {
      try {
        await BasicAxios.post("email-verify", { token: finalToken });
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } catch (error) {
        setTimeout(() => {
          navigate("..");
        }, 3000);
      }
    })();
  }, []);

  return <MainSpinner />;
}

export default checkGuest(VerifyEmail);
