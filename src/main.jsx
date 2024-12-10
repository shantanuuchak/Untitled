import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App.jsx";
import Submission from "./pages/Submission.jsx";
import Error from "./pages/Error.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/submission" element={<Submission />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
