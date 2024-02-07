import Link from "next/link";
import React from "react";
import classnames from "./dashboard.module.scss";
import Button from "../../( Landing_Page )/_components/Button";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import User from "./_components/User/User";

const Dashboard = () => {
  return (
    <section className={classnames.dashboard}>
      <div className={classnames.dashboard__container}>
        <div className={classnames.dashboard__header}>
          <User />
          {/* Battlepass */}
          {/* Settings */}
          <Link href="/api/auth/logout">Logout</Link>
        </div>
      </div>
    </section>
  );
};

export default withPageAuthRequired(Dashboard);
