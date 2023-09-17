"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/app/auth/register/register.module.css";

const Register = () => {
  const router = useRouter();
  const initialState = {
    name: "",
    email: "",
    password: "",
  };
  const [user, setUser] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      "https://note-app-waseem49.vercel.app/api/auth/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      }
    );
    if (res.ok) {
      router.push("/auth/login");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
