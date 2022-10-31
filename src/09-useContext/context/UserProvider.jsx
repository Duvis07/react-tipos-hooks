import React from "react";
import { UserContext } from "./UserContext";

const user = {
  id: 123,
  name: "Fernando",
  email: "duvis07",
  
};

export const UserProvider = ({ children }) => {
  return <UserContext.Provider value={user}>
    
    
    {children}</UserContext.Provider>;
};
