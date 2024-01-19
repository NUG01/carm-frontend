import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import BasicAxios from "./services/axios/BasicAxios";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/auth";

///components
import MainSpinner from "./components/Spinners/MainSpinner";

///pages
import MainPage from "./pages/MainPage";
import VerifyEmail from "./pages/VerificationPage/VerifyEmail";
import DashboardPage from "./pages/DashboardPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const authenticated = useSelector((state) => state.auth.authenticated);
  const [user, setUser] = useState(useSelector((state) => state.auth.user));
  const [authStatus, setAuthStatus] = useState(
    useSelector((state) => state.auth.authenticated)
  );
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    if (user) {
      setAuthStatus(true);
      setRendered(true);
    }
    if (!user) {
      ErrorPage;
      BasicAxios.get("user")
        .then(({ data }) => {
          dispatch(authActions.setUser(data));
          dispatch(authActions.setAuthenticated(true));

          setUser(data);
          setAuthStatus(true);
        })
        .catch(() => {
          dispatch(authActions.setUser(null));
          dispatch(authActions.setAuthenticated(false));
          setUser(null);
          setAuthStatus(false);
        })
        .finally(() => {
          setRendered(true);
        });
    }
  }, [location]);

  function logout() {
    dispatch(authActions.setUser(null));
    dispatch(authActions.setAuthenticated(false));
    setUser(null);
    setAuthStatus(false);
    navigate("/");
  }

  return (
    <>
      <div id="message"></div>
      {!rendered && <MainSpinner />}
      {rendered && (
        <Routes>
          <Route path="/" element={<MainPage logged={authStatus} />}></Route>
          <Route
            path="/verify-email"
            element={<VerifyEmail logged={authStatus} />}></Route>
          <Route
            path="/dashboard"
            element={
              <DashboardPage
                logoutEmit={() => {
                  logout();
                }}
                logged={authStatus}
              />
            }></Route>
          <Route path="/admin" element={<div>admin</div>}></Route>

          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      )}
    </>
  );
}

export default App;
