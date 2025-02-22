import React, { useEffect, useState } from "react";
import { SignOutModal } from "./signOutModal";
import { SignInModal } from "./SignInModal";
export function SignInArea() {
  const [button, setButton] = useState(<></>);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [didMount, setDidMount] = useState(false);

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [isSignedIn]);

  return <>{button}</>;

  function componentDidMount() {
    console.log("MOUNT PHASE: SignInArea");
    if (isSignedIn) setButton(<SignOutModal />);
    else setButton(<SignInModal onSignIn={handleSignIn} />);
    setDidMount(true);
  }

  function componentDidUpdate() {
    if (didMount) {
      console.log("UPDATE PHASE: SignInArea");
      if (isSignedIn) setButton(<SignOutModal />);
      else setButton(<SignInModal onSignIn={handleSignIn} />);
    }
  }

  function handleSignIn() {
    setIsSignedIn(true);
  }

  function handleSignOut() {
    setIsSignedIn(false);
  }
}
