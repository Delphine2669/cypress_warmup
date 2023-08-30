import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Button from "./components/Button/Button";
import Home from "./Pages/Home";
import Form from "./components/Form/Form";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/navbar" element={<NavBar />} />
          <Route path="/button" element={<Button />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
