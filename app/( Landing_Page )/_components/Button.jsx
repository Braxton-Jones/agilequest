
import React from 'react'
import styles from "../landingpage.module.scss"
import Link from 'next/link';
import { getSession } from '@auth0/nextjs-auth0';


export default async function Button() {
   const { user } = await getSession;
   console.log(user, 'user')
   if (user) {
      return (
         <Link href='/api/auth/logout' className={styles.login_button}>Logout</Link>
      )
   }
 return (
    <Link href='/api/auth/login' className={styles.login_button}>Login</Link>
 )
}

