import React, { useContext, useEffect } from "react";
import { UserContext } from "../lib/context";
import UsernameForm from "../components/UsernameForm";
import SignInButton from "../components/SignInButton";
import SignOutButton from "../components/SignOutButton";

export default function Enter() {
  const { user, username } = useContext(UserContext);

  return (
    <main>
      {/* <Metatags title="Enter" description="Sign up for this amazing app!" /> */}
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
}
