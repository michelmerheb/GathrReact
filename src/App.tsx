import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from "./navigations/Navigation";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Newspage from "./pages/NewsPage";

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<Newspage />} />
      </Routes>
    </Router>

  );
}

export default App;
