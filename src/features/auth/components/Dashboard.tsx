import { useAuth } from "../hooks/useAuth";

function Dashboard() {
  const { user } = useAuth();
  // console.log(user);
  return (
    <div>
      <h1 className="text-xl text-center m-4">
        Welcome Back ! {user?.username}
      </h1>
      <h1 className="text-xl text-center m-4">
        You're LoggedIn Successfully...
      </h1>
    </div>
  );
}

export default Dashboard;
