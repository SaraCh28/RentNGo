"use client";
import DarkVeil from "@/components/DarkVeil";
import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { Buttons } from "@/components/ui/button";
import Button from "@/components/ui/buttonNew";


const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const router = useRouter();


  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handles all input changes
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  // Handles submit → sends data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Login failed");

      setMessage("✔ Login successful!");
    } catch (err) {
      setMessage("❌ " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledWrapper className="relative min-h-screen text-white px-6 md:px-20 py-20 flex flex-col items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <DarkVeil />
      </div>
                <Button action={"Back"} href={"/"} className="absolute top-6 left-6 text-white underline hover:text-purple-500"/>

      <div className="container">
        <div className="heading">LogIn to your account</div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              required
              autoComplete="off"
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
            />
            <label htmlFor="username">Full Name</label>
          </div>

          <div className="input-field">
            <input
              required
              autoComplete="off"
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="input-field">
            <input
              required
              autoComplete="off"
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
          </div>

          <div className="btn-container">
            <button className="btn" disabled={loading}>
              {loading ? "Processing…" : "Submit"}
            </button>

            <div className="acc-text">
  New here ?{" "}
  <span
    style={{ color: "#6438c2", cursor: "pointer", fontWeight: "600" }}
    onClick={() => router.push("/SignUp")}
  >
    Create Account
  </span>
</div>

          </div>
        </form>

        {message && <div className="msg">{message}</div>}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    border: solid 1px #8d8d8d;
    padding: 20px;
    border-radius: 20px;
    background-color: #fff;
    width: 350px;
    color: #000;
  }

  .container .heading {
    font-size: 1.3rem;
    margin-bottom: 20px;
    font-weight: bolder;
  }

  .msg {
    margin-top: 15px;
    font-weight: 600;
    text-align: center;
    color: #6438c2;
  }

  .form {
    max-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 20px;
 }
 
  .form .btn-container {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .form .btn {
    padding: 10px 20px;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    border-radius: 10px;
    border: solid 1px #6438c2;
    border-bottom: solid 1px #a88df5;
    background: linear-gradient(135deg, #6438c2, #7b4ce8);
    color: #fff;
    font-weight: bolder;
    transition: all 0.2s ease;
    box-shadow: 0px 2px 3px #00000040, inset 0px 4px 5px #6d3fd4,
      inset 0px -4px 5px #4f2ca3;
    cursor: pointer;
  }

  .form .btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .form .btn:active {
    box-shadow: inset 0px 4px 5px #6d3fd4, inset 0px -4px 5px #4f2ca3;
    transform: scale(0.995);
  }

  .input-field {
    position: relative;
  }

  .input-field label {
    position: absolute;
    color: #8d8d8d;
    left: 15px;
    transform: translateY(0.6rem);
    transition: all 0.3s ease;
    pointer-events: none;
  }

  .input-field input {
    padding: 10px 15px;
    border-radius: 8px;
    border: solid 1px #8d8d8d;
    font-size: 1rem;
    width: 100%;
  }

  .input-field input:focus,
  .input-field input:valid {
    outline: none;
    border: solid 1px #6438c2;
  }

  .input-field input:focus ~ label,
  .input-field input:valid ~ label {
    transform: translateY(-51%) translateX(-10px) scale(0.8);
    background: #fff;
    padding: 0px 5px;
    color: #6438c2;
    font-weight: bold;
    border-radius: 100px;
  }
`;

export default Form;
