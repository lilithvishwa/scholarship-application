import { useState } from "react";
import Icon from "../Icon/Icon";
import { getInitials } from "../../../utils/getInitials";

function ProfileDropdown({ user, logout }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/*<p>{user.username}</p>*/}
      <button
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p className="bg-black text-white w-7 h-6.5 rounded-sm flex items-center justify-center">
          {getInitials(user.username)}
        </p>
        <p className="reference-id">{user.username}</p>
        <Icon
          name="material-symbols-light:arrow-back-ios-new-rounded"
          className={`transition-transform ${
            isOpen ? "rotate-90" : "-rotate-90"
          }`}
          size={16}
        />
      </button>

      {isOpen && (
        <div className="absolute mt-1 cursor-pointer  w-15">
          <button
            onClick={logout}
            className="w-full px-4 py-2 text-left hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;
