import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import BottomNav from "./components/BottomNav";
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
import ProhibitionInfoPage from "./pages/Information/ProhibitionInfoPage";
import ReleaseInfo from "./pages/Information/ReleaseInfo";
import PlanManagePage from "./pages/Plan/PlanManagePage";
import ProfilePage from "./pages/User/ProfilePage";
import ViewAllPage from "./pages/ViewAllPage";
import MapPage from "./pages/Map/MapPage";
import MethodTotal from "./pages/Method/MethodTotal";
import PointTotal from "./pages/Point/PointTotal";
import FishTotal from "./pages/Fish/FishTotal";
import MethodPage1 from "./pages/Method/MethodPage1";
import MethodPage2 from "./pages/Method/MethodPage2";
import MethodPage3 from "./pages/Method/MethodPage3";
import MethodPage4 from "./pages/Method/MethodPage4";
import PointPage1 from "./pages/Point/PointPage1";
import PointPage2 from "./pages/Point/PointPage2";
import PointPage3 from "./pages/Point/PointPage3";
import PointPage4 from "./pages/Point/PointPage4";
import FishPage1 from "./pages/Fish/FishPage1";
import FishPage2 from "./pages/Fish/FishPage2";
import FishPage3 from "./pages/Fish/FishPage3";
import FishPage4 from "./pages/Fish/FishPage4";
import FishPage5 from "./pages/Fish/FishPage5";
import FishPage6 from "./pages/Fish/FishPage6";
import FishPage7 from "./pages/Fish/FishPage7";
import FishPage8 from "./pages/Fish/FishPage8";
import FishPage9 from "./pages/Fish/FishPage9";
import FishPage10 from "./pages/Fish/FishPage10";
import TheFirstPage from "./pages/TheFirstPage";
import IntroductionPage from "./pages/IntroductionPage";
import RequireAuth from "./components/RequireAuth";

import Weather from "./components/Modal/Weather";

function App() {
  
  function ConditionalBottomNav() {
    const location = useLocation();
    // 로그인이나 회원가입 페이지에서는 BottomNav를 표시하지 않음
    if (location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/result' || location.pathname === '/introduction') {
      return null;
    }
  
    return <BottomNav />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TheFirstPage />} />
        <Route path="/introduction" element={<IntroductionPage />} />
        <Route path="/home" element={<RequireAuth><HomePage /></RequireAuth>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/collection" element={<RequireAuth><CollectionPage /></RequireAuth>} />
        <Route path="/detail/:fishname" element={<RequireAuth><DetailPage /></RequireAuth>} />
        <Route path="/fishbowl" element={<FishBowlPage />} />
        <Route path="/equipmentinfo" element={<EquipmentInfoPage />} />
        <Route path="/etiquetteinfo" element={<EtiquettePage />} />
        <Route path="/fishinfo" element={<FishTotal />} />
        <Route path="/method" element={<MethodTotal />} />
        <Route path="/point" element={<PointTotal />} />
        <Route path="/locationinfo" element={<RequireAuth><LocationInfoPage /></RequireAuth>} />
        <Route path="/prohibitioninfo" element={<ProhibitionInfoPage />} />
        <Route path="/releaseinfo" element={<ReleaseInfo />} />
        <Route path="/map" element={<RequireAuth><MapPage /></RequireAuth>} />
        <Route path="/planmanage" element={<RequireAuth><PlanManagePage /></RequireAuth>} />
        <Route path="/profile" element={<RequireAuth><ProfilePage /></RequireAuth>} />
        <Route path="/viewall" element={<RequireAuth><ViewAllPage /></RequireAuth>} />
        <Route path="/method1" element={<MethodPage1 />} />
        <Route path="/method2" element={<MethodPage2 />} />
        <Route path="/method3" element={<MethodPage3 />} />
        <Route path="/method4" element={<MethodPage4 />} />
        <Route path="/point1" element={<PointPage1 />} />
        <Route path="/point2" element={<PointPage2 />} />
        <Route path="/point3" element={<PointPage3 />} />
        <Route path="/point4" element={<PointPage4 />} />
        <Route path="/fish1" element={<FishPage1 />} />
        <Route path="/fish2" element={<FishPage2 />} />
        <Route path="/fish3" element={<FishPage3 />} />
        <Route path="/fish4" element={<FishPage4 />} />
        <Route path="/fish5" element={<FishPage5 />} />
        <Route path="/fish6" element={<FishPage6 />} />
        <Route path="/fish7" element={<FishPage7 />} />
        <Route path="/fish8" element={<FishPage8 />} />
        <Route path="/fish9" element={<FishPage9 />} />
        <Route path="/fish10" element={<FishPage10 />} />
      </Routes>
      <ConditionalBottomNav />
    </Router>
  );
}

export default App;
