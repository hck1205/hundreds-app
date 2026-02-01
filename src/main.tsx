import React from "react";
import ReactDOM from "react-dom/client";
import { Global } from "@emotion/react";
import App from "./App";

const globalStyles = {
  body: {
    margin: 0,
    fontFamily: "'Pretendard', 'Noto Sans KR', system-ui, sans-serif",
    backgroundColor: "#0f172a",
    color: "#e2e8f0",
  },
  "*": {
    boxSizing: "border-box",
  },
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>
);
