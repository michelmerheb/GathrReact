import Header from "../components/Header";

interface OptionsProps {
  title: string;
  description: string;
}

const SettingsOption = ({ title, description }: OptionsProps) => (
  <div className="py-2">
    <h2 className="text-lg text-gray-800 hover:text-purple-600 cursor-pointer">
      {title}
    </h2>
    <p className="text-gray-600">{description}</p>
    <hr className="my-2" />
  </div>
);

export default function Settings() {
  return (
    <div className="min-w-screen min-h-screen bg-gradient-to-bl from-purple-900 via-purple-500 to-rose-900">
      <Header />
      <div className="p-5">
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
          <div className="mt-4">
            <SettingsOption
              title="Account"
              description="Change your email, username"
            />
            <SettingsOption
              title="Notifications"
              description="Manage notifications settings"
            />
            <SettingsOption
              title="Privacy"
              description="Adjust your privacy settings"
            />
            <SettingsOption
              title="Security"
              description="Change password, enable 2FA"
            />
            <SettingsOption
              title="Theme"
              description="Choose between Light and Dark Theme"
            />
          </div>
        </div>
        <div className="w-full bg-white rounded-lg shadow-md p-4">
          <h1 className="text-xl font-semibold text-gray-800">More</h1>
          <div className="mt-4">
            <SettingsOption
              title="Help & Support"
              description="Get help and find answers"
            />
            <SettingsOption
              title="Terms and Conditions"
              description="Read and agree on Terms and Conditions"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
