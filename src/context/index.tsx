import { useEffect, useState, createContext } from "react";
import { readDirAsync, createDirAsync } from "../data/fs";

export const UserContext = createContext<Record<string, unknown>[]>([]);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<Record<string, unknown>[]>([]);

  async function initFs() {
    const record = await readDirAsync();
    if (!record) await createDirAsync();
    setUser(record);
  }

  useEffect(() => {
    initFs();
    return () => void initFs();
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
