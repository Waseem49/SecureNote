"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/app/auth/login/login.module.css";
import Link from "next/link";

const Login = () => {
  const router = useRouter();
  const initialState = {
    email: "",
    password: "",
  };
  const [user, setUser] = useState(initialState);
  console.log(user);

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
      "https://note-app-waseem49.vercel.app/api/auth/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      }
    );
    if (res.ok) {
      router.push("/");
    }

    console.log("Login submitted:", user);
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <label>Email</label>
            <input
              type="text"
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
            <button type="submit">Login</button>
            <div>
              <Link href={"/auth/register"}>
                <h5>Register</h5>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
