import { HashRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";
import Cursor from "./components/Cursor/Cursor.jsx";
import { useEffect, useState } from "react";

function App() {

  const [enableCursor, setEnableCursor] = useState(false);

  useEffect(() => {
    const isDesktop =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    setEnableCursor(isDesktop);
  }, []);

  return (
    <HashRouter>
      <AuthProvider>

        {/* Enable cursor ONLY on real desktops */}
        {enableCursor && <Cursor />}

        <AppRoutes />

      </AuthProvider>
    </HashRouter>
  );
}

export default App;
