import { useAuth0 } from "@auth0/auth0-react";

export default function LoginButton() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <>
        <h1>Welcome! To get started just sign in.</h1>
        <button className="login-btn" onClick={() => loginWithRedirect()}>
          Sign In
        </button>
      </>
    )
  );
}
