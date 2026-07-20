import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";

  const handleNavigate = (): void => {
    navigate(isLoginPage ? "/signup" : "/login");
  };

  return (
    <header className="flex justify-between items-center bg-pale-blue px-10 w-full h-20.5">
      <div className="">
        <img src="/header_login.svg" alt="logo" />
      </div>
      <button
        type="button"
        className="action-button text-body-muted hover:cursor-pointer"
        onClick={handleNavigate}
      >
        {isLoginPage ? "Don't have an Account? " : "Already have an Account? "}

        <span className="text-action-blue  border-action-blue border-b">
          {isLoginPage ? "Sign Up" : "Login"}
        </span>
      </button>
    </header>
  );
}

export default Header;
