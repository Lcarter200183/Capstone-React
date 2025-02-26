import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export function HandleRefresh(props) {
  const children = props.children;
  const navigateTo = useNavigate();
  const [didMount, setDidMount] = useState(false);
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
