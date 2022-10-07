import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FormPage from "./pages/FormPage";
import Home from "./pages/Home";
import UploadPage from "./pages/UploadPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/form" element={<FormPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
