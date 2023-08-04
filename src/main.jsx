import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import AboutUsProvider from "./context/context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider
        theme={{
          colors: {
            purple: "#941f7e",
          },
          primaryColor: "purple",
        }}
      >
        <AboutUsProvider>
          <App />
        </AboutUsProvider>
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
