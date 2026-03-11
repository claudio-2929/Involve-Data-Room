import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import GlobalLayout from './components/layout/GlobalLayout';
import { ThemeProvider } from './components/ThemeProvider';
import InvestmentThesisPage from './pages/InvestmentThesisPage';
import InvestorDeckPage from './pages/InvestorDeckPage';
import OnePagerPage from './pages/OnePagerPage';
import CLEARGeoAIPage from './pages/CLEARGeoAIPage';
import TechnologyMasterDocumentPage from './pages/TechnologyMasterDocumentPage';
import StratosphericPlatformArchitecturePage from './pages/StratosphericPlatformArchitecturePage';
import HapsRoadmapPage from './pages/HapsRoadmapPage';
import NeurostarFlightControlSystemPage from './pages/NeurostarFlightControlSystemPage';
import UnitEconomicsPage from './pages/UnitEconomicsPage';
import MaterialAgreementsPage from './pages/MaterialAgreementsPage';
import MarketOverviewPage from './pages/MarketOverviewPage';
import GeoAIPositioningPage from './pages/GeoAIPositioningPage';
import GTMStrategyPage from './pages/GTMStrategyPage';
import DefenceDualUsePage from './pages/DefenceDualUsePage';
import IPAndMoatPage from './pages/IPAndMoatPage';
import LoginPage from './pages/LoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';

import CompetitiveLandscapeAnalysisPage from './pages/CompetitiveLandscapeAnalysisPage';
import PricingStrategyAndRevenueModelPage from './pages/PricingStrategyAndRevenueModelPage';
import StrategicRoadmapPage from './pages/StrategicRoadmapPage';
import StrategicValueAndExitScenariosPage from './pages/StrategicValueAndExitScenariosPage';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />

            <Route path="/admin" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <GlobalLayout>
                  <AdminDashboardPage />
                </GlobalLayout>
              </ProtectedRoute>
            } />

            <Route path="/" element={<Navigate to="/dataroom/00_Executive_Overview/01_Investment_Thesis" replace />} />

            {/* Strategy & Market (accessible by partial AND full) */}
            <Route path="/dataroom/00_Executive_Overview/01_Investment_Thesis" element={
              <ProtectedRoute requiredAccess="partial">
                <GlobalLayout><InvestmentThesisPage /></GlobalLayout>
              </ProtectedRoute>
            } />
            <Route path="/dataroom/00_Executive_Overview/02_Investor_Deck_Latest" element={
              <ProtectedRoute requiredAccess="partial">
                <GlobalLayout><InvestorDeckPage /></GlobalLayout>
              </ProtectedRoute>
            } />
            <Route path="/dataroom/00_Executive_Overview/03_One_Pager" element={
              <ProtectedRoute requiredAccess="partial">
                <GlobalLayout><OnePagerPage /></GlobalLayout>
              </ProtectedRoute>
            } />
            <Route path="/dataroom/01_Strategy_and_Market/01_Market_Overview_TAM_SAM_SOM" element={
              <ProtectedRoute requiredAccess="partial">
                <GlobalLayout><MarketOverviewPage /></GlobalLayout>
              </ProtectedRoute>
            } />
            <Route path="/dataroom/01_Strategy_and_Market/02_GeoAI_and_Earth_Intelligence_Positioning" element={
              <ProtectedRoute requiredAccess="partial">
                <GlobalLayout><GeoAIPositioningPage /></GlobalLayout>
              </ProtectedRoute>
            } />
            <Route path="/dataroom/01_Strategy_and_Market/03_Competitive_Landscape_Analysis" element={
              <ProtectedRoute requiredAccess="partial">
                <GlobalLayout><CompetitiveLandscapeAnalysisPage /></GlobalLayout>
              </ProtectedRoute>
            } />
            <Route path="/dataroom/01_Strategy_and_Market/04_Pricing_Strategy_and_Revenue_Model" element={
              <ProtectedRoute requiredAccess="partial">
                <GlobalLayout><PricingStrategyAndRevenueModelPage /></GlobalLayout>
              </ProtectedRoute>
            } />
            <Route path="/dataroom/01_Strategy_and_Market/05_GTM_Strategy_Civil_and_Defence" element={
              <ProtectedRoute requiredAccess="partial">
                <GlobalLayout><GTMStrategyPage /></GlobalLayout>
              </ProtectedRoute>
            } />
            <Route path="/dataroom/01_Strategy_and_Market/06_Strategic_Roadmap_2025_2030" element={
              <ProtectedRoute requiredAccess="partial">
                <GlobalLayout><StrategicRoadmapPage /></GlobalLayout>
              </ProtectedRoute>
            } />
            <Route path="/dataroom/01_Strategy_and_Market/07_Strategic_Value_and_Exit_Scenarios" element={
              <ProtectedRoute requiredAccess="partial">
                <GlobalLayout><StrategicValueAndExitScenariosPage /></GlobalLayout>
              </ProtectedRoute>
            } />

            {/* Restricted Sections (require full access) */}
            <Route path="/dataroom/03_Defence_and_Dual_Use" element={
              <ProtectedRoute requiredAccess="full">
                <GlobalLayout><DefenceDualUsePage /></GlobalLayout>
              </ProtectedRoute>
            } />
            <Route path="/dataroom/03_Defence_and_Dual_Use/*" element={
              <ProtectedRoute requiredAccess="full">
                <GlobalLayout><DefenceDualUsePage /></GlobalLayout>
              </ProtectedRoute>
            } />
            <Route path="/dataroom/02_Product_and_Technology/01_Technology_Master_Document" element={
              <ProtectedRoute requiredAccess="full">
                <GlobalLayout><TechnologyMasterDocumentPage /></GlobalLayout>
              </ProtectedRoute>
            } />
            <Route path="/dataroom/02_Product_and_Technology/02_Stratospheric_Platform_Architecture" element={
              <ProtectedRoute requiredAccess="full">
                <GlobalLayout><StratosphericPlatformArchitecturePage /></GlobalLayout>
              </ProtectedRoute>
            } />
            <Route path="/dataroom/02_Product_and_Technology/03_Stratorelay_Stratostats_LoonHive_Roadmap" element={
              <ProtectedRoute requiredAccess="full">
                <GlobalLayout><HapsRoadmapPage /></GlobalLayout>
              </ProtectedRoute>
            } />
            <Route path="/dataroom/02_Product_and_Technology/04_Neurostar_Flight_Control_System" element={
              <ProtectedRoute requiredAccess="full">
                <GlobalLayout><NeurostarFlightControlSystemPage /></GlobalLayout>
              </ProtectedRoute>
            } />
            <Route path="/dataroom/02_Product_and_Technology/05_CLEAR_GeoAI_Infrastructure_Layer" element={
              <ProtectedRoute requiredAccess="full">
                <GlobalLayout><CLEARGeoAIPage /></GlobalLayout>
              </ProtectedRoute>
            } />
            <Route path="/dataroom/05_Financials/06_Unit_Economics_by_Platform" element={
              <ProtectedRoute requiredAccess="full">
                <GlobalLayout><UnitEconomicsPage /></GlobalLayout>
              </ProtectedRoute>
            } />
            <Route path="/dataroom/08_Organization/01_Executive_Management" element={
              <ProtectedRoute requiredAccess="full">
                <GlobalLayout>
                  {/* <ExecutiveManagementPage /> */}
                  <div className="p-10 text-white font-mono">Executive Management (Placeholder)</div>
                </GlobalLayout>
              </ProtectedRoute>
            } />
            <Route path="/dataroom/07_IP_and_Moat" element={
              <ProtectedRoute requiredAccess="full">
                <GlobalLayout><IPAndMoatPage /></GlobalLayout>
              </ProtectedRoute>
            } />
            <Route path="/dataroom/07_IP_and_Moat/*" element={
              <ProtectedRoute requiredAccess="full">
                <GlobalLayout><IPAndMoatPage /></GlobalLayout>
              </ProtectedRoute>
            } />
            <Route path="/dataroom/09_Corporate_and_Legal/07_Material_Contracts" element={
              <ProtectedRoute requiredAccess="full">
                <GlobalLayout><MaterialAgreementsPage /></GlobalLayout>
              </ProtectedRoute>
            } />

            {/* Fallback for other routes while building */}
            <Route path="/dataroom/*" element={
              <ProtectedRoute requiredAccess="partial">
                <GlobalLayout>
                  <div className="flex flex-col items-center justify-center py-20 opacity-50">
                    <div className="w-16 h-16 border-2 border-involve-blue border-t-transparent rounded-full animate-spin mb-6"></div>
                    <h3 className="text-xl font-mono tracking-widest uppercase">Under Construction</h3>
                    <p className="text-involve-muted mt-2">This section of the data room is currently being populated.</p>
                  </div>
                </GlobalLayout>
              </ProtectedRoute>
            } />
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
