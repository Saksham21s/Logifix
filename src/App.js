import "../src/Styles/scss/style.min.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrolltoTop";
import About from "./Pages/About/About";
import ProjectList from "./Pages/Projects/ProjectList";
import ProjectDetails from "./Pages/Projects/ProjectDetails";
import TeamList from "./Pages/Team/TeamList";
import TeamDetails from "./Pages/Team/TeamDetails";

const AppLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {!isHomePage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project-list" element={<ProjectList />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/team-list" element={<TeamList />} />
        <Route path="/team-details" element={<TeamDetails />} />
        
      </Routes>
      <ScrollToTop />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default App;
