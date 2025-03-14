import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogPost from "./blog/BlogPost.jsx";
import ThemeProvider from "./components/ThemeContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/blog/BlogPost/:customId" element={<BlogPost />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
