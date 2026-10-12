import React, { useState, useMemo } from 'react';
import { Search, Filter, RotateCcw, Sparkles } from 'lucide-react';
import CandidateTable from '../components/CandidateTable';

export default function Candidates({ candidates = [], onUpdateStatus }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('ALL');
  const [selectedStatus, setSelectedStatus] = useState('ALL');
  const [minScoreFilter, setMinScoreFilter] = useState('ALL');
  const [statusNotification, setStatusNotification] = useState(null);

  // Extract unique roles for dropdown
  const uniqueRoles = useMemo(() => {
    const roles = new Set(candidates.map((c) => c.role));
    return Array.from(roles);
  }, [candidates]);

  // Filter candidates
  const filteredCandidates = useMemo(() => {
    return candidates.filter((c) => {
      // Search matching name or role or email
      const matchesSearch =
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.email.toLowerCase().includes(searchQuery.toLowerCase());

      // Role match
      const matchesRole = selectedRole === 'ALL' || c.role === selectedRole;

      // Status match
      const matchesStatus = selectedStatus === 'ALL' || c.status === selectedStatus;

      // Min score match
      let matchesScore = true;
      if (minScoreFilter === '90') matchesScore = c.matchScore >= 90;
      else if (minScoreFilter === '80') matchesScore = c.matchScore >= 80;
      else if (minScoreFilter === '70') matchesScore = c.matchScore >= 70;

      return matchesSearch && matchesRole && matchesStatus && matchesScore;
    });
  }, [candidates, searchQuery, selectedRole, selectedStatus, minScoreFilter]);

  const handleStatusChange = (candidateId, newStatus) => {
    const target = candidates.find((c) => c.id === candidateId);
    if (onUpdateStatus) {
      onUpdateStatus(candidateId, newStatus);
    }
    setStatusNotification({
      candidateName: target ? target.name : 'Candidate',
      status: newStatus
    });
    setTimeout(() => {
      setStatusNotification(null);
    }, 3500);
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedRole('ALL');
    setSelectedStatus('ALL');
    setMinScoreFilter('ALL');
  };

  const isFiltered = searchQuery !== '' || selectedRole !== 'ALL' || selectedStatus !== 'ALL' || minScoreFilter !== 'ALL';

  return (
    <div>
      {/* Status notification toast */}
      {statusNotification && (
        <div className="alert-banner alert-banner-success">
          <Sparkles size={16} />
          <span>
            Candidate <strong>{statusNotification.candidateName}</strong> marked as <strong>{statusNotification.status}</strong>.
          </span>
        </div>
      )}

      {/* Main card */}
      <div className="ui-card">
        <div className="ui-card-header">
          <div>
            <h2 className="ui-card-title">Candidate Pipeline & Screening</h2>
            <p className="ui-card-subtitle">
              Showing {filteredCandidates.length} of {candidates.length} candidate applications
            </p>
          </div>
          {isFiltered && (
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={handleResetFilters}
            >
              <RotateCcw size={13} />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        <div className="ui-card-body" style={{ paddingBottom: 0 }}>
          {/* Toolbar */}
          <div className="toolbar-container">
            <div className="toolbar-search">
              <Search size={16} className="toolbar-search-icon" />
              <input
                type="text"
                className="toolbar-search-input"
                placeholder="Search candidates by name or role..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="toolbar-filters">
              {/* Role filter */}
              <select
                className="filter-select"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
              >
                <option value="ALL">All Roles</option>
                {uniqueRoles.map((role) => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>

              {/* Status filter */}
              <select
                className="filter-select"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="ALL">All Statuses</option>
                <option value="Under Review">Under Review</option>
                <option value="Shortlisted">Shortlisted</option>
                <option value="Interview Scheduled">Interview Scheduled</option>
                <option value="Rejected">Rejected</option>
              </select>

              {/* Match score filter */}
              <select
                className="filter-select"
                value={minScoreFilter}
                onChange={(e) => setMinScoreFilter(e.target.value)}
              >
                <option value="ALL">All Match Scores</option>
                <option value="90">90%+ (Top Match)</option>
                <option value="80">80%+ (Strong Match)</option>
                <option value="70">70%+ (Acceptable)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Candidate table */}
        <CandidateTable
          candidates={filteredCandidates}
          onUpdateStatus={handleStatusChange}
          showActions={true}
          emptyMessage="No candidates matched your search and filter criteria."
        />
      </div>
    </div>
  );
}
