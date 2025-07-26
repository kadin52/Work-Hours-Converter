import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import ImageToText from "./pages/ImageToText";
import ImageToCsv from "./pages/ImageToCSV";
import DownloadFile from "./pages/DownloadFile";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Navbar />

          <Routes>
            <Route path="/toText" element={<ImageToText />} />
            <Route path="/toCsv" element={<ImageToCsv />} />

            <Route
              path="/download-text"
              element={<DownloadFile fileType="text" />}
            />
            <Route
              path="/download-csv"
              element={<DownloadFile fileType="csv" />}
            />
            <Route path="/" element={<ImageToCsv />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
