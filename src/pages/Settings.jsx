import React, { useState } from 'react';
import { Save, CheckCircle, User, Bell, Sparkles, Building, Sliders } from 'lucide-react';

export default function Settings({ settings, onSaveSettings }) {
  const [formData, setFormData] = useState({ ...settings });
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSaveSettings) {
      onSaveSettings(formData);
    }
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
    }, 4000);
  };

  return (
    <div style={{ maxWidth: '860px', margin: '0 auto' }}>
      {savedSuccess && (
        <div className="alert-banner alert-banner-success">
          <CheckCircle size={18} />
          <div>
            <strong>Settings saved!</strong> Your recruiter profile and screening preferences have been updated.
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Recruiter Profile Section */}
        <div className="settings-section-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <User size={18} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-text-main)' }}>
                Recruiter Profile
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                Personal identity shown on candidate invitation emails and notifications
              </p>
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="fullName"
                className="form-input"
                value={formData.fullName || ''}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Work Email</label>
              <input
                type="email"
                name="email"
                className="form-input"
                value={formData.email || ''}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Role Title</label>
              <input
                type="text"
                name="roleTitle"
                className="form-input"
                value={formData.roleTitle || ''}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Department / Pod</label>
              <input
                type="text"
                name="department"
                className="form-input"
                value={formData.department || ''}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Company / Organization</label>
              <input
                type="text"
                name="companyName"
                className="form-input"
                value={formData.companyName || ''}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Timezone</label>
              <select
                name="timezone"
                className="form-select"
                value={formData.timezone || 'America/New_York (GMT-4)'}
                onChange={handleInputChange}
              >
                <option value="America/New_York (GMT-4)">America/New_York (Eastern Time)</option>
                <option value="America/Chicago (GMT-5)">America/Chicago (Central Time)</option>
                <option value="America/Denver (GMT-6)">America/Denver (Mountain Time)</option>
                <option value="America/Los_Angeles (GMT-7)">America/Los_Angeles (Pacific Time)</option>
                <option value="Europe/London (GMT+1)">Europe/London (GMT+1)</option>
                <option value="Asia/Kolkata (GMT+5:30)">Asia/Kolkata (IST GMT+5:30)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Screening & Copilot Configuration */}
        <div className="settings-section-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Sliders size={18} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-text-main)' }}>
                ScreenSmart Copilot Rules
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                Heuristics used for simulated candidate ranking and threshold tagging
              </p>
            </div>
          </div>

          <div className="toggle-switch-row">
            <div className="toggle-switch-info">
              <h4>Auto-Evaluate Resumes on Ingestion</h4>
              <p>Run simulated parsing and generate AI summaries immediately when a resume is uploaded.</p>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                name="autoAIEvaluation"
                checked={!!formData.autoAIEvaluation}
                onChange={handleInputChange}
              />
              <span className="slider" />
            </label>
          </div>

          <div style={{ padding: '16px 0 6px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label className="form-label">
                Minimum Match Score for Automatic Shortlist Recommendation
              </label>
              <strong style={{ color: 'var(--color-primary)', fontSize: '0.9rem' }}>
                {formData.minMatchScoreThreshold || 80}%
              </strong>
            </div>
            <input
              type="range"
              name="minMatchScoreThreshold"
              min="50"
              max="95"
              step="5"
              value={formData.minMatchScoreThreshold || 80}
              onChange={handleInputChange}
              style={{ width: '100%', accentColor: 'var(--color-primary)' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--color-text-light)', marginTop: '4px' }}>
              <span>50% (Lenient)</span>
              <span>75% (Balanced)</span>
              <span>95% (Strict)</span>
            </div>
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="settings-section-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#f5f3ff', color: '#7c3aed', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Bell size={18} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-text-main)' }}>
                Notification Preferences
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                Configure email alerts and interview calendar reminders
              </p>
            </div>
          </div>

          <div className="toggle-switch-row">
            <div className="toggle-switch-info">
              <h4>Email Alerts on High Match Applications</h4>
              <p>Receive immediate alerts when an applicant exceeds your 80%+ threshold.</p>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                name="emailNotifications"
                checked={!!formData.emailNotifications}
                onChange={handleInputChange}
              />
              <span className="slider" />
            </label>
          </div>

          <div className="toggle-switch-row">
            <div className="toggle-switch-info">
              <h4>Interview Calendar Reminders</h4>
              <p>Send 1-hour and 15-minute reminders to the interviewer panel before calls.</p>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                name="interviewReminders"
                checked={!!formData.interviewReminders}
                onChange={handleInputChange}
              />
              <span className="slider" />
            </label>
          </div>

          <div className="toggle-switch-row">
            <div className="toggle-switch-info">
              <h4>Daily Pipeline Digest</h4>
              <p>Receive a morning email recap of new applicants, upcoming screens, and pending reviews.</p>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                name="dailySummary"
                checked={!!formData.dailySummary}
                onChange={handleInputChange}
              />
              <span className="slider" />
            </label>
          </div>
        </div>

        {/* Form Action Controls */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
          <button type="submit" className="btn btn-primary">
            <Save size={16} />
            <span>Save Changes</span>
          </button>
        </div>
      </form>
    </div>
  );
}
