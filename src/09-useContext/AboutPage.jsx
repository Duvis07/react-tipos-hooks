import React from "react";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const AboutPage = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <>
      <div>AboutPage</div>
      <pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>
    
    </>
  );
};
