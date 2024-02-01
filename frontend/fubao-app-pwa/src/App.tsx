import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/User/LoginPage";
import SignupPage from "./pages/User/SignupPage";
import ResultPage from "./pages/AI/ResultPage";
import CollectionPage from "./pages/Collection/CollectionPage";
import DetailPage from "./pages/Collection/DetailPage";
import FishBowlPage from "./pages/FishBowl/FishBowlPage";
import EquipmentInfoPage from "./pages/Information/EquipmentInfoPage";
import EtiquettePage from "./pages/Information/EtiquetteInfoPage";
import FishInfoPage from "./pages/Information/FishInfoPage";
import LocationInfoPage from "./pages/Information/LocationInfoPage";
import MethodInfoPage from "./pages/Information/MethodInfoPage";
import PointInfoPage from "./pages/Information/PointInfoPage";
import ProhibitionInfoPage from "./pages/Information/ProhibitionInfoPage";
import ReleaseInfo from "./pages/Information/ReleaseInfo";
import MainPage from "./pages/Main/MainPage";
import PlanManagePage from "./pages/Plan/PlanManagePage";
import ProfilePage from "./pages/User/ProfilePage";
import ViewAllPage from "./pages/ViewAllPage";
import MapPage from "./pages/Map/MapPage";

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/detail/:fishname/:level" element={<DetailPage />} />
        <Route path="/fishbowl" element={<FishBowlPage />} />
        <Route path="/equipmentinfo" element={<EquipmentInfoPage />} />
        <Route path="/etiquetteinfo" element={<EtiquettePage />} />
        <Route path="/fishinfo" element={<FishInfoPage />} />
        <Route path="/locationinfo" element={<LocationInfoPage />} />
        <Route path="/methodinfo" element={<MethodInfoPage />} />
        <Route path="/pointinfo" element={<PointInfoPage />} />
        <Route path="/prohibitioninfo" element={<ProhibitionInfoPage />} />
        <Route path="/releaseinfo" element={<ReleaseInfo />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/planmanage" element={<PlanManagePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/viewall" element={<ViewAllPage />} />
      </Routes>
  );
}

export default App;
