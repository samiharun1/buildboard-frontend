import React, { useState } from 'react';
import DailyCheckIn from '../components/DailyCheckIn';
import TodaysFocus from '../components/TodaysFocus';
import QuickShortcuts from '../components/QuickShortcuts';
import TeamPulse from '../components/TeamPulse';
import '../components/DashboardLayout.css';
import CustomSidebar from '../components/CustomSidebar';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="dashboard-layout">
      <CustomSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      <div
        className={`dashboard-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}
      >
        <div className="dashboard-row">
          <DailyCheckIn />
          <TodaysFocus />
        </div>
        <QuickShortcuts />
        <TeamPulse />
      </div>
    </div>
  );
};

export default Dashboard;

