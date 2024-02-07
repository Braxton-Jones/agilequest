import React from "react";
import styles from "../( Landing_Page )/landingpage.module.scss";
import Link from "next/link";
import { getSession } from "@auth0/nextjs-auth0";

export default async function Button() {
  const session = await getSession();
  const user = session ? session.user : null;
  console.log(user, "user");
  if (user) {
    return (
      <Link href="/api/auth/logout" className={styles.login_button}>
        Logout
      </Link>
    );
  }
  return (
    <Link href="/api/auth/login" className={styles.login_button}>
      Login
    </Link>
  );
}
