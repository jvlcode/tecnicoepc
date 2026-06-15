// App.tsx
// React + TypeScript + React Router v6

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";   // Adjust the import paths based on your file structure
import About from "./About"; // Adjust the import paths based on your file structure
import Services from "./Services";
import Contact from "./Contact";
import Careers from "./Careers";
import EnvironmentalFactors from "./EnvFactors";
import SocialFactors from "./SocialFactors";
import GovernanceFactors from "./GovFactors";
import Engineering from "./Engineering";
import EnterpriseAssetPage from "./Enterprise";
import RiskManagementPage from "./RiskManagement";
import EngineeringProject from "./EngineeringProject";
import DataManagementProject from "./DataManagmentProject";
import RiskManagementProject from "./RiskManagementProject";

export default function App() {
  return (
    <BrowserRouter basename="/tecnicoepc">
      <Routes>
        {/* Primary Page Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/environmental-factors" element={<EnvironmentalFactors />} />
        <Route path="/social-factors" element={<SocialFactors />} />
        <Route path="/governance-factors" element={<GovernanceFactors />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/enterprise-asset-management" element={<EnterpriseAssetPage />} />
        <Route path="/risk-management" element={<RiskManagementPage />} />
        <Route path="/engineering-project" element={<EngineeringProject />} />
        <Route path="/data-management-project" element={<DataManagementProject />} />
        <Route path="/risk-management-project" element={<RiskManagementProject />} />

        {/* Fallback Catch-All Route (Redirects broken links back to Home) */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}