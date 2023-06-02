import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import NavBar from "./pages/NavBar";
import PageNotFound from "./pages/PageNotFound";
import BannerPage from "./pages/BannerPage";
import Pagination from "./pages/Pagination";
import GooglePractice from "./pages/GooglePractice";
import Carousel from "./pages/Carousel";
import CovidActive from "./pages/CovidActive";
import Karthik from "./Karthik";

function App() {
  return (
    <BrowserRouter>
          <NavBar/>
          <BannerPage/>
          {/* <Pagination/> */}
          <br/>
          {/* <GooglePractice/> */}
          {/* <Carousel/> */}
          {/* <CovidActive/> */}
          <Karthik/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path=" * " element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
