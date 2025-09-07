import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogPost from "./blog/BlogPost.jsx";
import TermsOfServices from "./terms/TermsOfServices.jsx";
import PrivacyPolicy from "./privacy/PrivacyPolicy.jsx";
import Header from "./container/Header.jsx";
import Footer from "./container/Footer.jsx";
import WhatsAppButton from "./components/Whatsapp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog/BlogPost/:customId" element={<BlogPost />} />
        <Route path="/terms" element={<TermsOfServices />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <WhatsAppButton />
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
