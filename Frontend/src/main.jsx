import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import WhatsAppButton from "./components/Whatsapp Support/WhatsAppButton.jsx";
import ChatBot from "./components/Chatbot/Chatbot.jsx";
// import GoogleSheetProvider from "./GoogleSheetProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <WhatsAppButton /> */}
    <ChatBot />
  </StrictMode>
);
