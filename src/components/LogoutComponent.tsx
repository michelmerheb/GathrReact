import { useState } from "react";
import { useDispatch } from "react-redux";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/16/solid";
import Modal from "./ModalComponent";
import { logout } from "../redux/Slices/UserSlice";

const LogoutIcon = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    setShowModal(false);
    dispatch(logout());
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="p-2 rounded-full hover:bg-gray-200"
      >
        <ArrowLeftStartOnRectangleIcon className="h-7 w-7 text-gray-800 hover:text-purple-600" />
      </button>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleLogout}
      />
    </>
  );
};

export default LogoutIcon;
