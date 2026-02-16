import React, { createContext, useState } from "react";
export const AppContextData = createContext();
const AppContext = ({ children }) => {
  const [user, setUser] = useState("Manish");
  return (
    <AppContextData.Provider value={{ user,setUser }}>
      {children}
    </AppContextData.Provider>
  );
};
export default AppContext;
