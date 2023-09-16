import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AuthContextProvider } from "./contexts/AuthContext.tsx";
import { ApiContextProvider } from "./contexts/ApiContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApiContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ApiContextProvider>
  </React.StrictMode>
);
