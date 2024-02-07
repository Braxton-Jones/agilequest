import Link from "next/link";
import React from "react";
import classnames from "./dashboard.module.scss";
import Button from "../../_components/Button";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const Dashboard = () => {
  return (
    <section className={classnames.dashboard}>
      <div className={classnames.dashboard__container}>
        <div className={classnames.dashboard__header}>
          {/* User Section */}
          {/* Battlepass */}
          {/* Settings */}
          <Button />
        </div>
      </div>
    </section>
  );
};

export default withPageAuthRequired(Dashboard);
