
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import Events from "./components/Events/Events";
import Team from "./components/Team/Team";
import Home from "./components/home/Home"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/team" element={<Team />} />
        </Routes>

        <Footer />
    </>
  );
}

export default App;
