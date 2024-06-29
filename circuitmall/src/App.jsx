import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Filter from "./Pages/Filter";
import About from "./Pages/About";
import "./index.css";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Search from "./Pages/Search";
import Productpage from "./Pages/Productpage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Filter" element={<Filter />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Productpage" element={<Productpage/>} />
      </Routes>
    </>
  );
}

export default App;
