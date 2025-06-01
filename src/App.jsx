import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Genreral/Navbar/Navbar";
import Home from "./components/Main/Home/Home";
import Layout from "./layout/Layout";
import Slideshow from "./components/Main/Slider/Slideshow";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/slide" element={<Slideshow />} />
          <Route path="/1" element={<Navbar />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
