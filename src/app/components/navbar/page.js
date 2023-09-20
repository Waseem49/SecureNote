"use client";
import React, { useContext } from "react";
import styles from "@/app/components/navbar/navbar.module.css";
import { MyContext } from "@/app/context/contextapi";
import { useRouter } from "next/navigation";
import Image from "next/image";
//https://github.com/Waseem49/note_app/assets/111652485/de042a33-b131-4bdd-ad08-965cfa47bb27
const Navbar = () => {
  const { auth } = useContext(MyContext);
  console.log(auth);
  const router = useRouter();
  const handlelogout = async (e) => {
    console.log("logout");
    const res = await fetch(
      "https://note-app-waseem49.vercel.app/api/auth/logout",
      {
        method: "POST",
      }
    );
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      router.push("/auth/login");
    }
  };
  return (
    <div className={styles.navbar_main}>
      <div>
        <Image
          src={
            "https://github.com/Waseem49/note_app/assets/111652485/de042a33-b131-4bdd-ad08-965cfa47bb27"
          }
          alt="logo"
          width={100}
          height={100}
        />
      </div>
      <div onClick={handlelogout}>{auth ? "Logout" : "Login"}</div>
    </div>
  );
};

export default Navbar;
