import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "main/pages/HomePage";
import AvilaBeachPage from "main/pages/AvilaBeachPage";
import LosAlamosPage from "main/pages/LosAlamosPage";
import ArroyoGrandePage from "main/pages/ArroyoGrandePage";
import SanLuisObispoPage from "main/pages/SanLuisObispoPage";

import RiversidePage from "main/pages/RiversidePage";

import IrvinePage from "main/pages/IrvinePage";

import SanFranciscoPage from "main/pages/SanFranciscoPage";

import SacramentoPage from "main/pages/SacramentoPage";



import "bootstrap/dist/css/bootstrap.css";
import MountainViewPage from "main/pages/MountainViewPage";


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
        <Route exact path="/towns/SanLuisObispo" element={<SanLuisObispoPage />} />
        <Route exact path="/towns/Riverside" element={<RiversidePage />} />
        <Route exact path="/towns/Irvine" element={<IrvinePage />} />
        <Route exact path="/towns/MountainView" element = {<MountainViewPage />} />


	<Route exact path="/towns/SanFrancisco" element={<SanFranciscoPage />} />


        <Route exact path="/towns/Sacramento" element={<SacramentoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
