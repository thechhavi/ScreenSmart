import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Candidates from './pages/Candidates';
import CandidateDetails from './pages/CandidateDetails';
import Interviews from './pages/Interviews';
import Settings from './pages/Settings';
import {
  getStoredCandidates,
  saveStoredCandidates,
  getStoredInterviews,
  saveStoredInterviews,
  getStoredSettings,
  saveStoredSettings
} from './data/candidates';
import { AlertTriangle, Home } from 'lucide-react';

export default function App() {
  const [candidates, setCandidates] = useState(getStoredCandidates);
  const [interviews, setInterviews] = useState(getStoredInterviews);
  const [settings, setSettings] = useState(getStoredSettings);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Sync to local storage
  useEffect(() => {
    saveStoredCandidates(candidates);
  }, [candidates]);

  useEffect(() => {
    saveStoredInterviews(interviews);
  }, [interviews]);

  useEffect(() => {
    saveStoredSettings(settings);
  }, [settings]);

  // Handler to update candidate status (Shortlist, Reject, etc.)
  const handleUpdateCandidateStatus = (candidateId, newStatus) => {
    setCandidates((prev) =>
      prev.map((c) => (c.id === candidateId ? { ...c, status: newStatus } : c))
    );
  };

  // Handler to add a new interview
  const handleAddInterview = (newInterview) => {
    setInterviews((prev) => [newInterview, ...prev]);
  };

  // Handler to update settings
  const handleSaveSettings = (newSettings) => {
    setSettings(newSettings);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="app-container">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
        candidatesCount={candidates.length}
        interviewsCount={interviews.length}
      />

      <div className="main-wrapper">
        <Navbar onToggleSidebar={toggleSidebar} settings={settings} />

        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  candidates={candidates}
                  interviews={interviews}
                  onUpdateStatus={handleUpdateCandidateStatus}
                />
              }
            />
            <Route
              path="/candidates"
              element={
                <Candidates
                  candidates={candidates}
                  onUpdateStatus={handleUpdateCandidateStatus}
                />
              }
            />
            <Route
              path="/candidates/:id"
              element={
                <CandidateDetails
                  candidates={candidates}
                  onUpdateStatus={handleUpdateCandidateStatus}
                />
              }
            />
            <Route
              path="/interviews"
              element={
                <Interviews
                  interviews={interviews}
                  candidates={candidates}
                  onAddInterview={handleAddInterview}
                  onUpdateStatus={handleUpdateCandidateStatus}
                />
              }
            />
            <Route
              path="/settings"
              element={
                <Settings
                  settings={settings}
                  onSaveSettings={handleSaveSettings}
                />
              }
            />
            {/* 404 Fallback */}
            <Route
              path="*"
              element={
                <div className="ui-card" style={{ textAlign: 'center', padding: '60px 24px' }}>
                  <AlertTriangle size={48} style={{ color: '#d97706', margin: '0 auto 16px' }} />
                  <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px' }}>Page Not Found</h2>
                  <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px' }}>
                    The page you are looking for does not exist or has been moved.
                  </p>
                  <Link to="/" className="btn btn-primary" style={{ display: 'inline-flex' }}>
                    <Home size={16} />
                    <span>Return to Dashboard</span>
                  </Link>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}
