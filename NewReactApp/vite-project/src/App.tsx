import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ImageUpload from "./components/ImageUpload";
import Navbar from "./components/Navbar";
import ImageToText from "./pages/ImageToText";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Navbar />

          <Routes>
            <Route path="/" element={<ImageUpload />} />
            <Route path="/toText" element={<ImageToText />} />
            <Route path="/toCsv" element={<ImageUpload />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
