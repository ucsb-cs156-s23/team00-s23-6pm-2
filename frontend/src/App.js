import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "main/pages/HomePage";
import AvilaBeachPage from "main/pages/AvilaBeachPage";
import LosAlamosPage from "main/pages/LosAlamosPage";
import ArroyoGrandePage from "main/pages/ArroyoGrandePage";

import RiversidePage from "main/pages/RiversidePage";

import IrvinePage from "main/pages/IrvinePage";


import "bootstrap/dist/css/bootstrap.css";


function App() {

  return (
    <BrowserRouter basename="/team00-s23-6pm-2">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/towns/" element={<AvilaBeachPage />} />
        <Route exact path="/towns/LosAlamos" element={<LosAlamosPage />} />

        <Route exact path="/towns/Riverside" element={<RiversidePage />} />

        <Route exact path="/towns/Irvine" element={<IrvinePage />} />
        <Route exact path="/towns/ArroyoGrande" element={<ArroyoGrandePage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
