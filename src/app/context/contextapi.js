"use client";
const { createContext, useState } = require("react");
export const MyContext = createContext();

export const Provider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  return (
    <MyContext.Provider value={{ auth, setAuth }}>
      {children}
    </MyContext.Provider>
  );
};
