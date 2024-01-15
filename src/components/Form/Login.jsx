// Login.jsx
import "./Login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiEndpoint =
      "https://www.7ader.net/GeneralApiV11/api/dashboard/token";
    const requestBody = {
      ConnectionStringName: "TeleWare",
      SpParams: {
        username: username,
        password: password,
      },
    };

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        navigate("/data");
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="logo">تسجيل الدخول</div>
          <div className="form">
            <div className="inputGroup">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="اسم الحساب"
              />
            </div>

            <div className="inputGroup">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=" كلمة السر"
              />
            </div>
          </div>
          <div className="button">
            <button type="submit">تسجيل</button>
          </div>
        </form>
      </div>
    </div>
  );
}
