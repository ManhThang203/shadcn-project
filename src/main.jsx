import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider as ThemeProviderContext } from "./context/ThemeProvider";
createRoot(document.getElementById("root")).render(
  <ThemeProviderContext defaultTheme="system">
    <Theme>
      <App />
    </Theme>
  </ThemeProviderContext>
);
