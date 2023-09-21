"use client";
import React, { useContext } from "react";
import styles from "@/app/components/navbar/navbar.module.css";
import { MyContext } from "@/app/context/contextapi";
import { useRouter } from "next/navigation";
import Image from "next/image";
const Navbar = () => {
  const { auth } = useContext(MyContext);
  console.log(auth);
  const router = useRouter();
  const handlelogout = async (e) => {
    const res = await fetch("/api/auth/logout", {
      method: "POST",
    });
    if (res.ok) {
      const data = await res.json();
      router.push("/auth/login");
    }
  };
  return (
    <div className={styles.navbar_main}>
      <div>
        <Image
          src="https://i.ibb.co/9gR5vK4/note-app.png"
          alt="note-app"
          width={40}
          height={40}
        />
      </div>
      <div className={styles.logout} onClick={handlelogout}>{auth ? "Logout" : "Login"}</div>
    </div>
  );
};

export default Navbar;
