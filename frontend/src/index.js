import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MalwareFilesContextProvider } from "./context/MalwareFileContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MalwareFilesContextProvider>
      <App />
    </MalwareFilesContextProvider>
  </React.StrictMode>
);