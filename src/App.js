import "../src/Styles/scss/style.min.css";
import { BrowserRouter as Router, useLocation, useRoutes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrolltoTop";
import NotFound from "./Components/PageNotFound";
import SearchPage from "./Components/SearchPage";
import About from "./Pages/About/About";
import ProjectList from "./Pages/Projects/ProjectList";
import ProjectDetails from "./Pages/Projects/ProjectDetails";
import TeamList from "./Pages/Team/TeamList";
import TeamDetails from "./Pages/Team/TeamDetails";
import Testimonial from "./Pages/Testimonial//testimonial";
import Pricing from "./Pages/Pricing/Pricing";
import Details from "./Pages/Services/Details";
import ServiceDetails from "./Pages/Services/ServiceDetails";
import NewsGrid from "./Pages/News/NewsGrid";
import NewsDetails from "./Pages/News/NewsDetails";
import Contact from "./Pages/Contact/Contact";
import Products from "./Pages/Shop/Products";
import ProductsWithSidebar from "./Pages/Shop/ProductsWithSidebar";
import Cart from "./Pages/Shop/Cart";

const AppLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/project-list", element: <ProjectList /> },
    { path: "/project-details", element: <ProjectDetails /> },
    { path: "/team-list", element: <TeamList /> },
    { path: "/team-details", element: <TeamDetails /> },
    { path: "/testimonial", element: <Testimonial /> },
    { path: "/pricing", element: <Pricing /> },
    { path: "/details", element: <Details /> },
    { path: "/service-details", element: <ServiceDetails /> },
    { path: "/news-grid", element: <NewsGrid /> },
    { path: "/news-details", element: <NewsDetails /> },
    { path: "/contact", element: <Contact /> },
    { path: "/products", element: <Products /> },
    { path: "/products-with-sidebar", element: <ProductsWithSidebar /> },
    { path: "/cart", element: <Cart /> },
    { path: "/404", element: <NotFound /> },
    { path: "*", element: <NotFound /> },
    { path: "/search", element: <SearchPage /> },
  ]);

  const isNotFoundPage = routes && routes.props.children.type === NotFound;

  return (
    <>
      {!(isHomePage || isNotFoundPage) && <Navbar />}
      {routes}
      <ScrollToTop />
      {!isNotFoundPage && <Footer />}
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