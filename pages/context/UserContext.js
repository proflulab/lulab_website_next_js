"use client";
import { createContext, useState, useEffect, useContext } from "react";
import supabase from "../../pages/lib/supabaseClient";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 获取初始会话
    const getSession = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      if (sessionData?.session?.user) {
        setUser(sessionData.session.user);
      } else {
        setUser(null);
      }
      setLoading(false);
    };

    getSession();

    // 注销监听器
    return () => {
      // 此处不再使用 `onAuthStateChange`，因此不需要注销
    };
  }, [setUser]);

  return (
    <UserContext.Provider value={{ user, loading, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
