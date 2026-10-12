import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  User, 
  Video, 
  Plus, 
  CheckCircle, 
  AlertCircle, 
  CalendarCheck, 
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function Interviews({ 
  interviews = [], 
  candidates = [], 
  onAddInterview, 
  onUpdateStatus 
}) {
  const [searchParams] = useSearchParams();
  const preselectedCandidateId = searchParams.get('candidateId') || '';

  const [formData, setFormData] = useState({
    candidateId: preselectedCandidateId,
    interviewer: 'Sarah Jenkins (VP of Engineering)',
    date: '',
    time: '10:00 AM',
    duration: '45 mins',
    type: 'Technical Screen',
    notes: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [successBanner, setSuccessBanner] = useState(null);

  // When candidateId in search param changes, sync it
  useEffect(() => {
    if (preselectedCandidateId) {
      setFormData((prev) => ({ ...prev, candidateId: preselectedCandidateId }));
    }
  }, [preselectedCandidateId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const errors = {};
    if (!formData.candidateId) errors.candidateId = 'Please select a candidate';
    if (!formData.interviewer.trim()) errors.interviewer = 'Interviewer name is required';
    if (!formData.date) errors.date = 'Interview date is required';
    if (!formData.time) errors.time = 'Interview time is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const selectedCandidate = candidates.find((c) => c.id === formData.candidateId);
    const candidateName = selectedCandidate ? selectedCandidate.name : 'Candidate';
    const role = selectedCandidate ? selectedCandidate.role : 'Engineering';

    const newInterview = {
      id: `int-${Date.now()}`,
      candidateId: formData.candidateId,
      candidateName,
      role,
      interviewer: formData.interviewer,
      date: formData.date,
      time: formData.time,
      duration: formData.duration,
      type: formData.type,
      notes: formData.notes,
      meetingLink: `https://meet.screensmart.app/int-${formData.candidateId}`,
      status: 'Confirmed'
    };

    onAddInterview(newInterview);

    // Also update candidate status to "Interview Scheduled"
    if (selectedCandidate && selectedCandidate.status !== 'Interview Scheduled') {
      onUpdateStatus(selectedCandidate.id, 'Interview Scheduled');
    }

    setSuccessBanner({
      candidateName,
      date: formData.date,
      time: formData.time
    });

    // Reset form fields
    setFormData({
      candidateId: '',
      interviewer: 'Sarah Jenkins (VP of Engineering)',
      date: '',
      time: '10:00 AM',
      duration: '45 mins',
      type: 'Technical Screen',
      notes: ''
    });

    setTimeout(() => {
      setSuccessBanner(null);
    }, 4500);
  };

  return (
    <div>
      {/* Success banner */}
      {successBanner && (
        <div className="alert-banner alert-banner-success">
          <CheckCircle size={18} />
          <div>
            <strong>Interview scheduled successfully!</strong> Meeting invite dispatched for{' '}
            <strong>{successBanner.candidateName}</strong> on {successBanner.date} at {successBanner.time}.
          </div>
        </div>
      )}

      {/* Grid: Form on Left/Top, Upcoming List on Right/Bottom */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.8fr', gap: '24px', alignItems: 'start' }}>
        
        {/* Schedule Interview Form Card */}
        <div className="ui-card">
          <div className="ui-card-header">
            <div>
              <h2 className="ui-card-title">
                <Plus size={18} />
                <span>Schedule New Interview</span>
              </h2>
              <p className="ui-card-subtitle">
                Coordinate automated video screening with the hiring squad
              </p>
            </div>
          </div>

          <div className="ui-card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group" style={{ marginBottom: '14px' }}>
                <label className="form-label">
                  Candidate <span className="form-label-required">*</span>
                </label>
                <select
                  name="candidateId"
                  className="form-select"
                  value={formData.candidateId}
                  onChange={handleInputChange}
                  style={{ borderColor: formErrors.candidateId ? '#ef4444' : undefined }}
                >
                  <option value="">Select a candidate...</option>
                  {candidates.map((cand) => (
                    <option key={cand.id} value={cand.id}>
                      {cand.name} — {cand.role} ({cand.matchScore}% Match)
                    </option>
                  ))}
                </select>
                {formErrors.candidateId && (
                  <span style={{ fontSize: '0.75rem', color: '#ef4444' }}>
                    {formErrors.candidateId}
                  </span>
                )}
              </div>

              <div className="form-group" style={{ marginBottom: '14px' }}>
                <label className="form-label">
                  Interviewer(s) <span className="form-label-required">*</span>
                </label>
                <input
                  type="text"
                  name="interviewer"
                  className="form-input"
                  placeholder="e.g. Sarah Jenkins (VP of Engineering)"
                  value={formData.interviewer}
                  onChange={handleInputChange}
                  style={{ borderColor: formErrors.interviewer ? '#ef4444' : undefined }}
                />
                {formErrors.interviewer && (
                  <span style={{ fontSize: '0.75rem', color: '#ef4444' }}>
                    {formErrors.interviewer}
                  </span>
                )}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '14px' }}>
                <div className="form-group">
                  <label className="form-label">
                    Date <span className="form-label-required">*</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    className="form-input"
                    value={formData.date}
                    onChange={handleInputChange}
                    style={{ borderColor: formErrors.date ? '#ef4444' : undefined }}
                  />
                  {formErrors.date && (
                    <span style={{ fontSize: '0.75rem', color: '#ef4444' }}>
                      {formErrors.date}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Time <span className="form-label-required">*</span>
                  </label>
                  <input
                    type="text"
                    name="time"
                    className="form-input"
                    placeholder="e.g. 10:30 AM"
                    value={formData.time}
                    onChange={handleInputChange}
                    style={{ borderColor: formErrors.time ? '#ef4444' : undefined }}
                  />
                  {formErrors.time && (
                    <span style={{ fontSize: '0.75rem', color: '#ef4444' }}>
                      {formErrors.time}
                    </span>
                  )}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '14px' }}>
                <div className="form-group">
                  <label className="form-label">Interview Type</label>
                  <select
                    name="type"
                    className="form-select"
                    value={formData.type}
                    onChange={handleInputChange}
                  >
                    <option value="Initial HR Screen">Initial HR Screen</option>
                    <option value="Technical Screen">Technical Screen</option>
                    <option value="Technical Deep Dive">Technical Deep Dive</option>
                    <option value="System Design">System Design</option>
                    <option value="Leadership & Culture">Leadership & Culture</option>
                    <option value="Portfolio Review">Portfolio Review</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Duration</label>
                  <select
                    name="duration"
                    className="form-select"
                    value={formData.duration}
                    onChange={handleInputChange}
                  >
                    <option value="30 mins">30 mins</option>
                    <option value="45 mins">45 mins</option>
                    <option value="60 mins">60 mins</option>
                    <option value="90 mins">90 mins</option>
                  </select>
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '20px' }}>
                <label className="form-label">Briefing / Focus Topics</label>
                <textarea
                  name="notes"
                  className="form-textarea"
                  placeholder="Optional guidelines for the interview team..."
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={2}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                <CalendarCheck size={16} />
                <span>Confirm & Schedule Interview</span>
              </button>
            </form>
          </div>
        </div>

        {/* Upcoming Scheduled Interviews */}
        <div className="ui-card">
          <div className="ui-card-header">
            <div>
              <h2 className="ui-card-title">
                <Calendar size={18} />
                <span>Upcoming Scheduled Interviews ({interviews.length})</span>
              </h2>
              <p className="ui-card-subtitle">
                Confirmed screening sessions linked with candidate profiles
              </p>
            </div>
          </div>

          <div className="ui-card-body">
            {interviews.length === 0 ? (
              <div className="empty-state">
                <CalendarClock size={36} className="empty-state-icon" />
                <h3 className="empty-state-title">No upcoming interviews</h3>
                <p className="empty-state-desc">
                  Schedule your first interview using the form on the left.
                </p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {interviews.map((item) => (
                  <div key={item.id} className="interview-item-card">
                    <div className="interview-item-header">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <Link 
                            to={`/candidates/${item.candidateId}`}
                            style={{ fontWeight: 600, fontSize: '0.98rem', color: 'var(--color-primary)' }}
                          >
                            {item.candidateName}
                          </Link>
                          <span className={`status-badge ${item.status === 'Confirmed' ? 'status-interview-scheduled' : 'status-under-review'}`}>
                            <span className="status-badge-dot" />
                            {item.status}
                          </span>
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                          Role: {item.role}
                        </div>
                      </div>

                      <div style={{ textAlign: 'right' }}>
                        <span style={{ fontSize: '0.78rem', fontWeight: 600, background: '#f1f5f9', padding: '3px 8px', borderRadius: '4px', color: '#334155' }}>
                          {item.type}
                        </span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <Calendar size={14} color="#2563eb" />
                        <strong style={{ color: 'var(--color-text-main)' }}>{item.date}</strong>
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <Clock size={14} color="#2563eb" />
                        <span>{item.time} ({item.duration})</span>
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <User size={14} color="#64748b" />
                        <span>{item.interviewer}</span>
                      </span>
                    </div>

                    {item.notes && (
                      <p style={{ fontSize: '0.8rem', color: '#64748b', background: '#f8fafc', padding: '8px 12px', borderRadius: '6px', margin: 0 }}>
                        <strong>Notes:</strong> {item.notes}
                      </p>
                    )}

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f1f5f9', paddingTop: '10px', marginTop: '2px' }}>
                      <a
                        href={item.meetingLink}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-secondary btn-sm"
                        style={{ color: 'var(--color-primary)' }}
                      >
                        <Video size={13} />
                        <span>Join Video Room</span>
                        <ExternalLink size={12} />
                      </a>

                      <Link
                        to={`/candidates/${item.candidateId}`}
                        style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}
                      >
                        <span>View Dossier</span>
                        <ChevronRight size={14} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
