import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { createUser, clearError } from "../redux/Slices/UserSlice";
import backgroundImage from "../assets/bgImage.png";
import { Link } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const handleSignup = (event: any) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
    } else {
      dispatch(createUser({ email, password }));
      setErrorMessage("");
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="flex items-center justify-center w-screen h-screen bg-cover bg-center bg-no-repeat"
    >
      <div className="p-8 bg-white rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-3xl text-custom-purple font-bold text-center mb-6">
          Sign Up
        </h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4 relative">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute inset-y-0 mt-5 right-0 pr-3 flex items-center"
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5 text-gray-700" />
              ) : (
                <EyeIcon className="h-5 w-5 text-gray-700" />
              )}
            </button>
          </div>
          <div className="mb-6 relative">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={toggleConfirmPassword}
              className="absolute inset-y-0 mt-5 right-0 pr-3 flex items-center"
            >
              {showConfirmPassword ? (
                <EyeSlashIcon className="h-5 w-5 text-gray-700" />
              ) : (
                <EyeIcon className="h-5 w-5 text-gray-700" />
              )}
            </button>
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-custom-purple hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link
            to="/login"
            className="text-custom-purple hover:text-purple-400"
          >
            Already have an account? Log In
          </Link>
        </div>
      </div>
    </div>
  );
}
