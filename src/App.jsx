import { HashRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";
import Cursor from "./components/Cursor/Cursor.jsx";

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        {/* Custom Cursor */}
        <Cursor />

        {/* App Routes */}
        <AppRoutes />
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
