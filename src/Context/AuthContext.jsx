import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  // current logged user
  const [user, setUser] = useState(null);

  // load logged user on start
  useEffect(() => {
    const saved = localStorage.getItem("loggedUser");
    if (saved) {
      setUser(JSON.parse(saved));
    }
  }, []);

  // signup new user
  const signup = (data) => {
    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    // check email already exist
    const exist = users.find(u => u.email === data.email);

    if (exist) {
      return { success: false, message: "Email already registered" };
    }

    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));

    // auto login after signup
    localStorage.setItem("loggedUser", JSON.stringify(data));
    setUser(data);

    return { success: true };
  };

  // login user
  const login = (email, contact) => {
    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const found = users.find(
      u => u.email === email && u.contact === contact
    );

    if (!found) {
      return { success: false, message: "Invalid credentials" };
    }

    localStorage.setItem("loggedUser", JSON.stringify(found));
    setUser(found);

    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("loggedUser");
  };

  return (
    <AuthContext.Provider
      value={{ user, signup, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
