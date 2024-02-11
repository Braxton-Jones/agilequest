import React from "react";
import styles from "../landingpage.module.scss";
import Link from "next/link";
import { getSession } from "@auth0/nextjs-auth0";

export default async function Button() {
  const session = await getSession();
  const user = session ? session.user : null;
  console.log(user, "user");
  if (user) {
    return (
      <Link href="/dashboard" className={styles.login_button}>
        Return to Dashboard
      </Link>
    );
  }
  return (
    <Link href="/api/auth/login" className={styles.login_button}>
      Login
    </Link>
  );
}
