import React, { useEffect } from "react";
import { useNavigation } from "react-router";

export function HandleRefresh(props) {
  const children = props.children;
  const navigateTo = useNavigation();
  const [didMount, setDidMount] = useEffect(false);
  useEffect(componentDidMount, []);

  if (didMount) return <>{children}</>;
  else return <></>;

  function componentDidMount() {
    const redirectPath = localStorage.getItem("redirect");
    if (redirectPath) {
      navigateTo(redirectPath);
      localStorage.setItem("redirect", "");
      setTimeout(() => setDidMount(true), 1000);
    } else setDidMount(true);
  }
}
