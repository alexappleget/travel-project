import LoginButton from "./Components/LoginButton";
import Profile from "./Components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

export default function App() {
  const { isLoading, error } = useAuth0();

  return (
    <main>
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <LoginButton />
          <Profile />
        </>
      )}
    </main>
  );
}
