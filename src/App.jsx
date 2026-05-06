import "./index.css";
import { Home } from "./Component/pages/Home";
import { About } from "./Component/pages/About";
import { Project } from "./Component/pages/Project";
import { Blog } from "./Component/pages/Blog";
import { Contact } from "./Component/pages/Contact";
import { Hire } from "./Component/pages/Hire";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Component/Utility/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/projects" element={<Project/>}></Route>
          <Route path="/Blog" element={<Blog/>}></Route>
          <Route path="/Contact" element={< Contact/>}></Route>
          <Route path="/hire" element={<Hire/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
