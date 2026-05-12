import "./index.css";
import { Home } from "./Component/pages/Home";
import { About } from "./Component/pages/About";
import { Project } from "./Component/pages/Project";
import { Blog } from "./Component/pages/Blog";
import { Contact } from "./Component/pages/Contact";
import { Hire } from "./Component/pages/Hire";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./Component/Utility/Navbar";
import { Footer } from "./Component/Utility/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Blog" element={<Navigate to="/blog" replace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Contact" element={<Navigate to="/contact" replace />} />
          <Route path="/hire" element={<Hire />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
