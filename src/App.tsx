import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Run from "./pages/Offense/Run";
import Pass from "./pages/Offense/Pass";
import ZoneCoverage from "./pages/Defense/Zone";
import ManCoverage from "./pages/Defense/Man";
import Blitz from "./pages/Defense/Blitz";



function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/run" element={<Run />} />
      <Route path="/pass" element={<Pass />} />
      <Route path="/zone" element={<ZoneCoverage />} />
      <Route path="/man" element={<ManCoverage />} />
      <Route path="/blitz" element={<Blitz />} />
    </Routes>
  );
}

export default App;
