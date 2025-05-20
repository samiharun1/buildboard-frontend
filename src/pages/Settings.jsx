import { useState } from "react";
import "../index.css";
import ProfileSettings from "../components/ProfileSettings";
import SettingsHeader from "../components/SettingsHeader";
import AccountSettings from "../components/AccountSettings";
import SettingsTabs from "../components/SettingsTabs";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <div className="settings-page">
      <SettingsHeader />
      <SettingsTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Profile" && <ProfileSettings />}
      {activeTab === "Account" && <AccountSettings />}
    </div>
  );
};

export default Settings;
