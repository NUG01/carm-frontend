import './App.css';
import { useEffect, useState } from 'react';
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  Navigate,
} from 'react-router-dom';

import BasicAxios from './services/axios/BasicAxios';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './store/auth';

///components
import MainSpinner from './components/Spinners/MainSpinner';

///pages
import MainPage from './pages/MainPage';
import VerifyEmail from './pages/VerificationPage/VerifyEmail';
import DashboardPage from './pages/DashboardPage';
import ErrorPage from './pages/ErrorPage';
import AdminPage from './pages/AdminPage/AdminPage';
import { csrfToken } from './services/api';
import MainLayout from './components/Layout/index';
import CalculatorPage from './pages/CalculatorPage';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const authenticated = useSelector((state) => state.auth.authenticated);
  const [user, setUser] = useState(useSelector((state) => state.auth.user));
  console.log(user);
  const [authStatus, setAuthStatus] = useState(
    useSelector((state) => state.auth.authenticated),
  );
  const isAdmin = useSelector((state) => state.auth.user?.role_id == 1);
  // const isAdmin = user?.role_id == 1;

  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    if (user) {
      setAuthStatus(true);
      setRendered(true);
    }
    if (!user) {
      BasicAxios.get('user')
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
    navigate('/');
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
            element={<VerifyEmail logged={authStatus} />}
          ></Route>
          <Route
            path="/dashboard"
            element={
              <MainLayout
                logoutEmit={() => {
                  logout();
                }}
                logged={authStatus}
              />
            }
          >
            <Route
              path=""
              element={<Navigate to="/dashboard/calculator" replace />}
            />
            <Route path="calculator" element={<CalculatorPage />}></Route>
          </Route>
          <Route path="/admin" element={<AdminPage logged={isAdmin} />}></Route>

          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      )}
    </>
  );
}

export default App;
