"use client";
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/app/login/login.module.css";
import Link from "next/link";
import { MyContext } from "@/app/context/contextapi";

const Login = () => {
  const router = useRouter();
  const initialState = {
    email: "",
    password: "",
  };
  const [user, setUser] = useState(initialState);
  const { setAuth } = useContext(MyContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    if (data?.message === "Login Successfully") {
      setAuth(data.token);
      router.push("/");
    }
    if (data?.message === "User not found") {
      alert("User not found");
    } else if (data?.message === "Wrong Credential") {
      alert("Wrong Credential");
    }
    setUser(initialState);
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
              <Link href={"/register"}>
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
