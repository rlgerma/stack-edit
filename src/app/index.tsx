import { createTheme, ThemeProvider } from "@fluentui/react";

import { theme } from "../config";

const ssTheme = createTheme(theme);

function App() {
  return <ThemeProvider applyTo="body" theme={ssTheme}></ThemeProvider>;
}

export default App;
