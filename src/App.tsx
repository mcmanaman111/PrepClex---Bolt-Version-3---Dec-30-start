import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Dashboard2 from './pages/Dashboard2';
import Dashboard3 from './pages/Dashboard3';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CreateTest from './pages/CreateTest';
import PreviousTests from './pages/PreviousTests';
import Performance from './pages/Performance';
import Notes from './pages/Notes';
import Help from './pages/Help';
import Account from './pages/Account';
import ExamPage from './pages/ExamPage';
import StudyResources from './pages/StudyResources';
import LabValues from './pages/LabValues';
import VitalSigns from './pages/VitalSigns';
import DrugClassifications from './pages/DrugClassifications';
import MedMath from './pages/MedMath';
import NursingAbbreviations from './pages/NursingAbbreviations';

const App = () => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-50/50 to-white dark:from-gray-900 dark:via-gray-900/95 dark:to-gray-900 transition-colors">
        <Routes>
          <Route path="/exam" element={<ExamPage />} />
          <Route
            path="/*"
            element={
              <div className="min-h-screen flex">
                <Sidebar 
                  isCollapsed={isSidebarCollapsed} 
                  onToggleCollapse={toggleSidebar} 
                />
                <div className={`flex-1 flex flex-col ${isSidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
                  <Header />
                  <main className="flex-1 p-6 overflow-auto">
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/dashboard2" element={<Dashboard2 />} />
                      <Route path="/dashboard3" element={<Dashboard3 />} />
                      <Route path="/create-test" element={<CreateTest />} />
                      <Route path="/previous-tests" element={<PreviousTests />} />
                      <Route path="/performance" element={<Performance />} />
                      <Route path="/study-resources" element={<StudyResources />} />
                      <Route path="/lab-values" element={<LabValues />} />
                      <Route path="/vital-signs" element={<VitalSigns />} />
                      <Route path="/drug-classifications" element={<DrugClassifications />} />
                      <Route path="/med-math" element={<MedMath />} />
                      <Route path="/nursing-abbreviations" element={<NursingAbbreviations />} />
                      <Route path="/notes" element={<Notes />} />
                      <Route path="/help" element={<Help />} />
                      <Route path="/account" element={<Account />} />
                    </Routes>
                  </main>
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;