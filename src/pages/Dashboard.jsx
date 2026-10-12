import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  UserCheck, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  CheckCircle2,
  CalendarCheck
} from 'lucide-react';
import StatCard from '../components/StatCard';
import CandidateTable from '../components/CandidateTable';

export default function Dashboard({ candidates = [], interviews = [], onUpdateStatus }) {
  const totalApplications = candidates.length;
  const shortlistedCount = candidates.filter(c => c.status === 'Shortlisted').length;
  const pendingReviewsCount = candidates.filter(c => c.status === 'Under Review').length;
  const upcomingInterviewsCount = interviews.length;

  // Recent 5 candidates
  const recentCandidates = candidates.slice(0, 5);

  return (
    <div>
      {/* Welcome & AI Status Banner */}
      <div 
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%)',
          border: '1px solid var(--color-primary-border)',
          borderRadius: 'var(--radius-lg)',
          padding: '20px 24px',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div 
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              background: '#2563eb',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Sparkles size={22} />
          </div>
          <div>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-text-main)' }}>
              Resume Screening & Interview Scheduling Copilot
            </h2>
            <p style={{ fontSize: '0.84rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>
              Screening engine has parsed <strong>{totalApplications} candidates</strong>. <strong>{shortlistedCount} candidates</strong> meet the role criteria and are ready for technical screening.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <Link to="/candidates" className="btn btn-primary btn-sm">
            <span>Review Pipeline</span>
            <ArrowRight size={14} />
          </Link>
          <Link to="/interviews" className="btn btn-secondary btn-sm">
            <CalendarCheck size={14} />
            <span>Schedule Interview</span>
          </Link>
        </div>
      </div>

      {/* 4 Stat Cards */}
      <div className="stat-card-grid">
        <StatCard
          title="Total Applications"
          value={totalApplications}
          icon={Users}
          trend="+18% from last week"
          trendType="up"
          iconBg="#eff6ff"
          iconColor="#2563eb"
        />
        <StatCard
          title="Shortlisted Candidates"
          value={shortlistedCount}
          icon={UserCheck}
          trend="High AI Match (>80%)"
          trendType="up"
          iconBg="#ecfdf5"
          iconColor="#059669"
        />
        <StatCard
          title="Upcoming Interviews"
          value={upcomingInterviewsCount}
          icon={Calendar}
          trend="Next: Elena Rostova (Oct 15)"
          trendType="up"
          iconBg="#f5f3ff"
          iconColor="#7c3aed"
        />
        <StatCard
          title="Pending Reviews"
          value={pendingReviewsCount}
          icon={Clock}
          trend="Requires recruiter sign-off"
          trendType="neutral"
          iconBg="#fffbeb"
          iconColor="#d97706"
        />
      </div>

      {/* Recent Candidates Section */}
      <div className="ui-card">
        <div className="ui-card-header">
          <div>
            <div className="ui-card-title">
              <span>Recent Applications & Screening Scores</span>
            </div>
            <div className="ui-card-subtitle">
              Candidates sorted by application date with automated match scoring
            </div>
          </div>
          <Link to="/candidates" className="btn btn-secondary btn-sm">
            <span>View All ({candidates.length})</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <CandidateTable
          candidates={recentCandidates}
          onUpdateStatus={onUpdateStatus}
          showActions={true}
        />
      </div>
    </div>
  );
}
