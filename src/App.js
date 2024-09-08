import {BrowserRouter, Routes, Route} from "react-router-dom";
import DashboardPage from "./pages/Dashboard";
import HomePage from "./pages/Home";
import './App.css'; 
import CoinPage from "./pages/Coin";
import GainersLosers from "./pages/GainersLosers";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/dashboard" element={<DashboardPage/>}/>
          <Route path="/coin/:id" element={<CoinPage/>}/>
          <Route path="/GainersLosers" element={<GainersLosers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
