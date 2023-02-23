import React, { useState } from "react";
import { UserContext } from "./UserContext";

//se crea un objeto con la informacion del usuario

/* const user = {
  id: 123,
  name: "Fernando",
  email: "duvis07",
}; */
//vamos a recibir como argumento los componente hijos
//recibe el value que es el objeto con la informacion del usuario
//es la informacion que cualquier hijo puede consumir
//el userProvider se debe colocar en el componente principal
export const UserProvider = ({ children }) => {
  
   const [user, setUser] = useState(); 
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
