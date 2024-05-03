import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import NewsPage from "../pages/NewsPage";
import SignupPage from "../pages/SignupPage";
import AboutUsPage from "../pages/AboutUsPage";

const Navigation = () => {
  const isAuth = useSelector((state: RootState) => state.user.isAuth);

  return (
    <Router>
      <Routes>
        {isAuth ? (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<Navigate replace to="/login" />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default Navigation;
