import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Test1 from "../pages/Test1";
import Test2 from "../pages/Test2";
import Result from "../pages/Result";
import Result2 from "../pages/Result2";

import ProtectedRoute from "../components/auth/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>

      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected Routes */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path="/test1"
        element={
          <ProtectedRoute>
            <Test1 />
          </ProtectedRoute>
        }
      />

      <Route
        path="/result"
        element={
          <ProtectedRoute>
            <Result />
          </ProtectedRoute>
        }
      />

      <Route
        path="/test2"
        element={
          <ProtectedRoute>
            <Test2 />
          </ProtectedRoute>
        }
      />

      <Route
        path="/result2"
        element={
          <ProtectedRoute>
            <Result2 />
          </ProtectedRoute>
        }
      />

      {/* Fallback */}
      <Route path="*" element={<Login />} />

    </Routes>
  );
};

export default AppRoutes;
