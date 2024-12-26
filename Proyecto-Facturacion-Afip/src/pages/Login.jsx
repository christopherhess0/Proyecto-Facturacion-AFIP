import React, { useState } from "react";
import "../styles/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = () => {
    const hashedPassword = btoa("ghh2012");

    if (username === "German" && btoa(password) === hashedPassword) {
      alert("Inicio de sesión exitoso");
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="login-container">
      <h1>Iniciar Sesión</h1>
      <div className="input-group">
        <label htmlFor="username">Usuario</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Ingresa tu usuario"
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Ingresa tu contraseña"
        />
      </div>
      <button className="btn" onClick={handleLogin}>
        Iniciar Sesión
      </button>
      {error && <div className="error">Usuario o contraseña incorrectos</div>}
    </div>
  );
};

export default Login;
