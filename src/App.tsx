import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AdminSamsaPanel from "./pages/AdminPanel";
import Profile from "./pages/Profile";
import SamsasPage from "./components/Menyu";
import AboutSection from "./components/About";
import Contact from "./pages/Bo'g'lanish";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminSamsaPanel/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/menu" element={<SamsasPage/>}/>
        <Route path="/about" element={<AboutSection/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
