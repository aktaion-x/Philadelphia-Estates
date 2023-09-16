import { createContext } from "react";
import axios, { AxiosInstance } from "axios";

type ApiContextValue = null | AxiosInstance;
type ApiContextProps = {
  children: React.ReactNode;
};

export const ApiContext = createContext<ApiContextValue>(null);

export const ApiContextProvider = ({ children }: ApiContextProps) => {
  const api = axios.create({
    baseURL: import.meta.env.VITE_API
  });

  return (
    <ApiContext.Provider value={api}>
      {children}
    </ApiContext.Provider>
  );
};
