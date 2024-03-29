import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Schedule from "./pages/Schedule";
import Footer from "./components/Footer";
import Standings from "./pages/Standings";
import WhoWeAre from "./pages/WhoWeAre";
import GameRules from "./pages/GameRules";
import TournamentFormat from "./pages/TournamentFormat";
import PrizeMoney from "./pages/PrizeMoney";
import Eligibility from "./pages/Eligibility";
import Register from "./pages/Register";
import Match from "./pages/Match";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/standings" element={<Standings />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/game-rules" element={<GameRules />} />
        <Route path="/tournament-format" element={<TournamentFormat />} />
        <Route path="/prize-money" element={<PrizeMoney />} />
        <Route path="/eligibility" element={<Eligibility />} />
        <Route path="/register" element={<Register />} />
        <Route path="/matches/:matchId" element={<Match />} />
      </Routes>

      <div className="custom-bg">
        <div className="container mx-auto">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
