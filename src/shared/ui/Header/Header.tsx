import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/features/auth/hooks/useAuth";

import { Button, Input, Icon } from "@shared/ui";
import ProfileDropdown from "./ProfileDropdown";

import type { HeaderVariant } from "@/types/route.type";

interface HeaderProps {
  variant?: HeaderVariant;
}

const navigationPages = {
  public: [
    { label: "Home", href: "/" },
    { label: "Scholarships", href: "/scholarship" },
    { label: "About Us", href: "/about-us" },
  ],

  authenticated: [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Explore Scholarships", href: "/scholarships" },
    { label: "My Applications", href: "/applications" },
  ],
} as const;

function Header({ variant = "default" }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const { user, logout } = useAuth();

  const isLoginPage = location.pathname === "/login";
  const isUser = user !== null;

  const handleNavigate = (): void => {
    navigate(isLoginPage ? "/signup" : "/login");
  };

  const navigation = variant === "default" ? [] : navigationPages[variant];

  const renderHeaderAction = () => {
    switch (variant) {
      case "public":
        return (
          <>
            {isUser ? (
              <ProfileDropdown user={user} logout={logout} />
            ) : (
              <div className="flex gap-4 action-button">
                <button
                  className="text-body-muted border border-hairline px-4 py-2 cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
                <Button
                  fullWidth={false}
                  paddingClass="px-4 py-2"
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </Button>
              </div>
            )}
          </>
        );
      case "authenticated":
        return (
          <>
            {isUser ? (
              <ProfileDropdown user={user} logout={logout} />
            ) : (
              <div className="flex gap-4 action-button">
                <button
                  className="text-body-muted border border-hairline px-4 py-2 cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
                <Button
                  fullWidth={false}
                  paddingClass="px-4 py-2"
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </Button>
              </div>
            )}
          </>
        );
      case "default":
        return (
          <>
            {isUser ? (
              <ProfileDropdown user={user} logout={logout} />
            ) : (
              <button
                type="button"
                className="action-button text-body-muted hover:cursor-pointer"
                onClick={handleNavigate}
              >
                {isLoginPage
                  ? "Don't have an Account? "
                  : "Already have an Account? "}

                <span className="border-b border-action-blue text-action-blue">
                  {isLoginPage ? "Sign Up" : "Login"}
                </span>
              </button>
            )}{" "}
          </>
        );
    }
  };

  return (
    <header className="flex h-20.5 w-full items-center justify-between border-b border-hairline bg-pale-blue px-10">
      {/* Logo */}
      <div>
        <img src="/header_login.svg" alt="logo" />
      </div>

      {variant === "authenticated" && (
        <div className="w-[483.06px]">
          <Input
            leftIcon={<Icon name="material-symbols:search" size={24} />}
            placeholder="Search here for Scholarships...."
            className="bg-white"
          />
        </div>
      )}

      {/* Navigation */}
      <nav className="flex items-center gap-8">
        {navigation.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              isActive
                ? "text-cohere-black border-b border-cohere-black"
                : "text-body-muted"
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Right side */}
      <div>{renderHeaderAction()}</div>
    </header>
  );
}

export default Header;
