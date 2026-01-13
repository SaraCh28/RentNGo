"use client";
import DarkVeil from "@/components/DarkVeil";
import { Buttons } from "@/components/ui/button";
import Button from "@/components/ui/buttonNew";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (formData.password !== formData.confirmPassword) {
      setLoading(false);
      return setMessage("❌ Passwords do not match!");
    }

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Signup failed");

      setMessage("✔ Account created successfully!");
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
      <div className="absolute top-6 left-6 text-white underline hover:text-purple-500">
                <Button action={"Back"} href={"/"} />
      </div>

      <div className="container">
        <div className="heading">Create your account</div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              
              autoComplete="off"
              type="text"
              id="fullname"
              value={formData.fullname}
              onChange={handleChange}
            />
            <label htmlFor="fullname">Full Name</label>
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

          <div className="input-field">
            <input
              required
              autoComplete="off"
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
          </div>

          <div className="btn-container">
            <button className="btn" disabled={loading}>
              {loading ? "Creating…" : "Sign Up"}
            </button>

            <div className="acc-text">
              Already have an account?{" "}
              <span style={{ color: "#6438c2", cursor: "pointer" }}>
              <Link href="/LogIn"
              className="w-[70%]">
              
                Log In
                </Link>
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

  .heading {
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

  .btn-container {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .btn {
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
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0px 2px 3px #00000040,
      inset 0px 4px 5px #6d3fd4,
      inset 0px -4px 5px #4f2ca3;
  }

  .btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .btn:active {
    box-shadow: inset 0px 4px 5px #6d3fd4,
      inset 0px -4px 5px #4f2ca3;
    transform: scale(0.995);
  }

  .input-field {
    position: relative;
  }

  .input-field input {
    padding: 10px 15px;
    border-radius: 8px;
    border: solid 1px #8d8d8d;
    width: 100%;
    font-size: 1rem;
  }

  .input-field input:focus,
  .input-field input:valid {
    border: solid 1px #6438c2;
    outline: none;
  }

  .input-field label {
    position: absolute;
    top: 0;
    left: 15px;
    transform: translateY(0.6rem);
    transition: 0.3s ease;
    pointer-events: none;
    color: #8d8d8d;
  }

  .input-field input:focus ~ label,
  .input-field input:valid ~ label {
    transform: translateY(-51%) translateX(-10px) scale(0.8);
    background: #fff;
    padding: 0 5px;
    color: #6438c2;
    font-weight: bold;
    border-radius: 100px;
  }
`;

export default Signup;
