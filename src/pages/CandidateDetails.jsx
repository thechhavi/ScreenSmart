import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  Check, 
  X, 
  FileText, 
  CalendarClock, 
  ThumbsUp, 
  HelpCircle, 
  AlertCircle,
  Building2,
  ExternalLink
} from 'lucide-react';

export default function CandidateDetails({ candidates = [], onUpdateStatus }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [internalNotes, setInternalNotes] = useState('');
  const [noteSaved, setNoteSaved] = useState(false);

  const candidate = candidates.find((c) => c.id === id);

  if (!candidate) {
    return (
      <div className="ui-card" style={{ textAlign: 'center', padding: '60px 24px' }}>
        <AlertCircle size={44} style={{ color: '#ef4444', margin: '0 auto 16px' }} />
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>Candidate Not Found</h2>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px' }}>
          No candidate matching identifier "{id}" was found in the pipeline.
        </p>
        <Link to="/candidates" className="btn btn-primary">
          <ArrowLeft size={16} />
          <span>Back to All Candidates</span>
        </Link>
      </div>
    );
  }

  const handleStatusChange = (newStatus) => {
    if (onUpdateStatus) {
      onUpdateStatus(candidate.id, newStatus);
    }
  };

  const handleSaveNotes = (e) => {
    e.preventDefault();
    setNoteSaved(true);
    setTimeout(() => setNoteSaved(false), 3000);
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

  return (
    <div>
      {/* Navigation breadcrumb bar */}
      <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/candidates" className="btn btn-secondary btn-sm">
          <ArrowLeft size={14} />
          <span>Back to Candidates</span>
        </Link>

        <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
          Candidate ID: {candidate.id} • Applied on {candidate.appliedDate}
        </span>
      </div>

      {/* Candidate Profile Header Card */}
      <div className="candidate-detail-header">
        <div className="candidate-header-left">
          <img
            src={candidate.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"}
            alt={candidate.name}
            className="candidate-header-avatar"
          />
          <div className="candidate-header-info">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <h2>{candidate.name}</h2>
              {getStatusBadge(candidate.status)}
              <span className={`match-score-badge ${candidate.matchScore >= 90 ? 'match-score-high' : candidate.matchScore >= 80 ? 'match-score-medium' : 'match-score-low'}`}>
                <Sparkles size={12} />
                {candidate.matchScore}% Match
              </span>
            </div>
            <div className="candidate-header-role">{candidate.role}</div>
            <div className="candidate-header-meta">
              <span><Mail size={14} /> {candidate.email}</span>
              <span><Phone size={14} /> {candidate.phone}</span>
              <span><MapPin size={14} /> {candidate.location}</span>
              <span><Briefcase size={14} /> {candidate.experience} exp</span>
            </div>
          </div>
        </div>

        {/* Screening Quick Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          {candidate.status !== 'Shortlisted' && (
            <button
              type="button"
              className="btn btn-success-outline"
              onClick={() => handleStatusChange('Shortlisted')}
            >
              <Check size={16} />
              <span>Shortlist Candidate</span>
            </button>
          )}

          {candidate.status !== 'Rejected' && (
            <button
              type="button"
              className="btn btn-danger-outline"
              onClick={() => handleStatusChange('Rejected')}
            >
              <X size={16} />
              <span>Reject</span>
            </button>
          )}

          <Link
            to={`/interviews?candidateId=${candidate.id}`}
            className="btn btn-primary"
          >
            <CalendarClock size={16} />
            <span>Schedule Interview</span>
          </Link>
        </div>
      </div>

      {/* Main 2-Column Details Grid */}
      <div className="candidate-detail-grid">
        {/* Left Column: AI Summary & Detailed Background */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* AI-Style Resume Summary */}
          <div className="ui-card">
            <div className="ui-card-header" style={{ background: '#f8fafc' }}>
              <div className="ui-card-title" style={{ color: 'var(--color-primary)' }}>
                <Sparkles size={18} />
                <span>ScreenSmart Copilot Resume Evaluation</span>
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', background: '#fff', border: '1px solid var(--color-border)', padding: '2px 8px', borderRadius: '4px' }}>
                Simulated AI Model Analysis
              </span>
            </div>

            <div className="ui-card-body">
              {/* Executive Overview */}
              <div style={{ marginBottom: '16px' }}>
                <h4 style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: '6px' }}>
                  EXECUTIVE SUMMARY
                </h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-main)', lineHeight: '1.5' }}>
                  {candidate.aiSummary?.overview || candidate.bio}
                </p>
              </div>

              {/* Strengths */}
              <div className="copilot-insight-box" style={{ background: '#f0fdf4', borderColor: '#bbf7d0' }}>
                <div className="copilot-insight-title" style={{ color: '#15803d' }}>
                  <ThumbsUp size={15} />
                  <span>Key Candidate Strengths</span>
                </div>
                <ul style={{ paddingLeft: '20px', fontSize: '0.86rem', color: '#166534', lineHeight: '1.6' }}>
                  {candidate.aiSummary?.strengths?.map((str, idx) => (
                    <li key={idx} style={{ marginBottom: '4px' }}>{str}</li>
                  ))}
                </ul>
              </div>

              {/* Areas to Probe / Interview Prep */}
              <div className="copilot-insight-box" style={{ background: '#fffbeb', borderColor: '#fde68a' }}>
                <div className="copilot-insight-title" style={{ color: '#b45309' }}>
                  <HelpCircle size={15} />
                  <span>Recommended Questions / Areas to Probe</span>
                </div>
                <ul style={{ paddingLeft: '20px', fontSize: '0.86rem', color: '#92400e', lineHeight: '1.6' }}>
                  {candidate.aiSummary?.areasToProbe?.map((probe, idx) => (
                    <li key={idx} style={{ marginBottom: '4px' }}>{probe}</li>
                  ))}
                </ul>
              </div>

              {/* Copilot Final Recommendation */}
              <div style={{ padding: '12px 16px', background: '#eff6ff', borderRadius: 'var(--radius-md)', border: '1px solid #bfdbfe' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#1e40af' }}>Copilot Decision Guidance: </span>
                <span style={{ fontSize: '0.85rem', color: '#1d4ed8' }}>
                  {candidate.aiSummary?.recommendation}
                </span>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="ui-card">
            <div className="ui-card-header">
              <h3 className="ui-card-title">
                <Briefcase size={18} />
                <span>Professional Work Experience</span>
              </h3>
            </div>
            <div className="ui-card-body">
              {candidate.workHistory && candidate.workHistory.map((work, idx) => (
                <div 
                  key={idx} 
                  style={{ 
                    borderLeft: '2px solid var(--color-primary-border)', 
                    paddingLeft: '16px', 
                    marginBottom: idx !== candidate.workHistory.length - 1 ? '20px' : 0,
                    position: 'relative'
                  }}
                >
                  <div 
                    style={{
                      position: 'absolute',
                      left: '-6px',
                      top: '0',
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: 'var(--color-primary)'
                    }} 
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                    <div style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--color-text-main)' }}>
                      {work.role}
                    </div>
                    <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                      {work.period}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.83rem', color: 'var(--color-primary)', fontWeight: 500, marginBottom: '6px' }}>
                    {work.company}
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>
                    {work.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Bio */}
          <div className="ui-card">
            <div className="ui-card-header">
              <h3 className="ui-card-title">
                <GraduationCap size={18} />
                <span>Education & Background</span>
              </h3>
            </div>
            <div className="ui-card-body">
              <div style={{ marginBottom: '14px' }}>
                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-text-main)' }}>
                  {candidate.education}
                </div>
              </div>
              <p style={{ fontSize: '0.86rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                {candidate.bio}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Skills, Notes & Resume Preview Sheet */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Skills Breakdown */}
          <div className="ui-card">
            <div className="ui-card-header">
              <h3 className="ui-card-title">Extracted Skills</h3>
            </div>
            <div className="ui-card-body">
              <div className="skills-pill-wrap">
                {candidate.skills?.map((skill, idx) => (
                  <span key={idx} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Recruiter Evaluation Notes */}
          <div className="ui-card">
            <div className="ui-card-header">
              <h3 className="ui-card-title">Recruiter Notes</h3>
            </div>
            <div className="ui-card-body">
              {noteSaved && (
                <div className="alert-banner alert-banner-success" style={{ padding: '8px 12px', fontSize: '0.8rem', marginBottom: '12px' }}>
                  <span>Notes saved successfully for this candidate.</span>
                </div>
              )}
              <form onSubmit={handleSaveNotes}>
                <div className="form-group">
                  <textarea
                    className="form-textarea"
                    placeholder="Add screening impression, salary notes, or internal interviewer instructions..."
                    value={internalNotes}
                    onChange={(e) => setInternalNotes(e.target.value)}
                    rows={4}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                  <button type="submit" className="btn btn-secondary btn-sm">
                    Save Note
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Resume Document Preview Placeholder */}
          <div className="ui-card">
            <div className="ui-card-header">
              <div className="ui-card-title">
                <FileText size={18} />
                <span>Resume Document Preview</span>
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                PDF Preview Mode
              </span>
            </div>

            <div className="ui-card-body" style={{ background: '#f8fafc', padding: '16px' }}>
              <div className="resume-preview-sheet">
                <div className="resume-header-preview">
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-text-main)' }}>
                    {candidate.name}
                  </h3>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                    {candidate.role}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                    {candidate.email} • {candidate.phone} • {candidate.location}
                  </div>
                </div>

                <div className="resume-section-title">Professional Summary</div>
                <p style={{ fontSize: '0.78rem', color: '#475569', lineHeight: '1.5' }}>
                  {candidate.bio}
                </p>

                <div className="resume-section-title">Core Competencies</div>
                <div style={{ fontSize: '0.78rem', color: '#475569', lineHeight: '1.5' }}>
                  {candidate.skills?.join(' • ')}
                </div>

                <div className="resume-section-title">Experience</div>
                {candidate.workHistory?.map((exp, i) => (
                  <div key={i} style={{ marginBottom: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', fontWeight: 600, color: '#0f172a' }}>
                      <span>{exp.role} — {exp.company}</span>
                      <span style={{ color: '#64748b' }}>{exp.period}</span>
                    </div>
                    <p style={{ fontSize: '0.74rem', color: '#475569' }}>{exp.description}</p>
                  </div>
                ))}

                <div className="resume-section-title">Education</div>
                <div style={{ fontSize: '0.76rem', color: '#334155' }}>
                  {candidate.education}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
