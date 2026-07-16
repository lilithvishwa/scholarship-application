function Header() {
  return (
    <header className="flex items-center bg-pale-blue w-full h-[10vh]">
      <div className="px-10">
        <img src="/header_login.svg" alt="logo" />
      </div>
      <div>
        <button className="text- ">Login</button>
      </div>
    </header>
  );
}

export default Header;
