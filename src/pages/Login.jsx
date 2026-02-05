import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../assets/styles/login.css";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const res = login(email, contact);

    if (!res.success) {
      alert(res.message);
      return;
    }

    navigate("/home");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          placeholder="Contact Number"
          onChange={(e) => setContact(e.target.value)}
          required
        />

        <button>Login</button>
      </form>

      <p>
        New user? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
};

export default Login;
