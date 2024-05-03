import { useState } from "react";
import Header from "../components/Header";

export default function Settings() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);

  const handleEmailNotificationChange = () => {
    setEmailNotifications(!emailNotifications);
  };

  const handlePushNotificationChange = () => {
    setPushNotifications(!pushNotifications);
  };

  return (
    <div className="min-w-screen min-h-screen bg-gradient-to-bl from-purple-900 via-purple-500 to-rose-900 text-white">
      <Header />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">Settings</h1>
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Notifications</h2>
          <div className="mt-4">
            <label
              htmlFor="email-notifications"
              className="flex items-center cursor-pointer"
            >
              <input
                id="email-notifications"
                type="checkbox"
                checked={emailNotifications}
                onChange={handleEmailNotificationChange}
                className="form-checkbox h-5 w-5 text-purple-300 focus:ring-purple-500 border-none"
              />
              <span className="ml-3 text-lg">Email Notifications</span>
            </label>
          </div>
          <div className="mt-2">
            <label
              htmlFor="push-notifications"
              className="flex items-center cursor-pointer"
            >
              <input
                id="push-notifications"
                type="checkbox"
                checked={pushNotifications}
                onChange={handlePushNotificationChange}
                className="form-checkbox h-5 w-5 text-purple-300 focus:ring-purple-500 border-none"
              />
              <span className="ml-3 text-lg">Push Notifications</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
