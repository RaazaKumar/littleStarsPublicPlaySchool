import './index.css'
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Fee from "./Pages/Fee";
import Home from "./Pages/Home"; // 👈 apna Home page banao
import ScrollToTop from './Components/ScrollToTop';

export default function App() {
  return (
    <>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="fee" element={<Fee />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contactus" element={<ContactUs />} />
      </Route>
    </Routes>
   
    </>
  );
}
