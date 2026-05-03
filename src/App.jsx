import { Home } from "lucide-react";
import "./App.css";
import { Home_ } from "./assets/Home";
import { BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home_ />}></Route>
          <Route path="/about" element={<> rahul </>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
