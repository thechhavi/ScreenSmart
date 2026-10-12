import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, X, ArrowUpRight, Sparkles, ChevronRight } from 'lucide-react';

export default function CandidateTable({ candidates = [], onUpdateStatus, showActions = true, emptyMessage = "No candidates found matching the criteria." }) {
  const navigate = useNavigate();

  const handleRowClick = (id) => {
    navigate(`/candidates/${id}`);
  };

  const handleAction = (e, candidateId, newStatus) => {
    e.stopPropagation();
    if (onUpdateStatus) {
      onUpdateStatus(candidateId, newStatus);
    }
  };

  const getMatchScoreBadge = (score) => {
    let styleClass = 'match-score-medium';
    if (score >= 90) styleClass = 'match-score-high';
    else if (score < 75) styleClass = 'match-score-low';

    return (
      <span className={`match-score-badge ${styleClass}`} title="AI Match Score">
        <Sparkles size={12} />
        {score}%
      </span>
    );
  };

  const getStatusBadge = (status) => {
    let statusClass = 'status-under-review';
    if (status === 'Shortlisted') statusClass = 'status-shortlisted';
    else if (status === 'Interview Scheduled') statusClass = 'status-interview-scheduled';
    else if (status === 'Rejected') statusClass = 'status-rejected';

    return (
      <span className={`status-badge ${statusClass}`}>
        <span className="status-badge-dot" />
        {status}
      </span>
    );
  };

  if (!candidates || candidates.length === 0) {
    return (
      <div className="empty-state">
        <p className="empty-state-desc">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="table-responsive">
      <table className="candidate-table">
        <thead>
          <tr>
            <th>Candidate</th>
            <th>Applied Role</th>
            <th>Experience</th>
            <th>Match Score</th>
            <th>Status</th>
            {showActions && <th style={{ textAlign: 'right' }}>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {candidates.map((cand) => (
            <tr
              key={cand.id}
              className="candidate-table-row"
              onClick={() => handleRowClick(cand.id)}
            >
              <td>
                <div className="candidate-profile-cell">
                  <img
                    src={cand.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"}
                    alt={cand.name}
                    className="candidate-avatar"
                  />
                  <div className="candidate-name-block">
                    <span className="candidate-name">{cand.name}</span>
                    <span className="candidate-email">{cand.email}</span>
                  </div>
                </div>
              </td>
              <td>
                <span style={{ fontWeight: 500, color: 'var(--color-text-main)' }}>
                  {cand.role}
                </span>
              </td>
              <td>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.84rem' }}>
                  {cand.experience}
                </span>
              </td>
              <td>
                {getMatchScoreBadge(cand.matchScore)}
              </td>
              <td>
                {getStatusBadge(cand.status)}
              </td>
              {showActions && (
                <td style={{ textAlign: 'right' }}>
                  <div className="table-actions" style={{ justifyContent: 'flex-end' }}>
                    {cand.status !== 'Shortlisted' && (
                      <button
                        type="button"
                        className="btn btn-sm btn-success-outline"
                        title="Shortlist Candidate"
                        onClick={(e) => handleAction(e, cand.id, 'Shortlisted')}
                      >
                        <Check size={13} />
                        <span>Shortlist</span>
                      </button>
                    )}
                    {cand.status !== 'Rejected' && (
                      <button
                        type="button"
                        className="btn btn-sm btn-danger-outline"
                        title="Reject Candidate"
                        onClick={(e) => handleAction(e, cand.id, 'Rejected')}
                      >
                        <X size={13} />
                        <span>Reject</span>
                      </button>
                    )}
                    <button
                      type="button"
                      className="btn btn-sm btn-secondary"
                      title="View Details"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRowClick(cand.id);
                      }}
                    >
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
