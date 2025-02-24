import '../src/Styles/style.css';
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
