import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./context";
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from "@livepeer/react";

const API_KEY = "efe8e84a-78bb-45d7-8719-1460aefb874b"

const livepeerClient = createReactClient({
  provider: studioProvider({
    apiKey: API_KEY,
  }),
});

const theme = {
  colors: {
    accent: "rgb(0, 145, 255)",
    containerBorderColor: "rgba(0, 145, 255, 0.9)",
  },
  fonts: {
    display: "Inter",
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <StateProvider>
      <LivepeerConfig client={livepeerClient} theme={theme}>
        <App />
      </LivepeerConfig>
    </StateProvider>
  </Router>
);
