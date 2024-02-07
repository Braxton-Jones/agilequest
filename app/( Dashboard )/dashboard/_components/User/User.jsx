import React from "react";
import classnames from "./user.module.scss";
import { getSession } from "@auth0/nextjs-auth0";
import Image from "next/image";
import Link from "next/link";

export default async function User() {
  const session = await getSession();
  const { user } = session;
  const { name, picture } = user;

  return (
    <section className={classnames.user}>
      <div className={classnames.user__avatar}>
        <Image src={picture} alt={name} width={70} height={70} />
      </div>
      <div className={classnames.user__info}>
        <div className={classnames.user__info_top}>
          <h3 className={classnames.user__name}>{name}</h3>
          <Link href="#">Settings</Link> {/* Link to settings */}
        </div>
        <div className={classnames.user__info_bottom}>
          {/* Level Bar */}
        </div>
      </div>
    </section>
  );
}
