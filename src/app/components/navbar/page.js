import React from "react";
import styles from "@/app/components/navbar/navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navbar_main}>
      <div>Logo</div>
      <Link href="/auth/login">
        <div>Login</div>
      </Link>
    </div>
  );
};

export default Navbar;
