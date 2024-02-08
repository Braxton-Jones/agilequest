import Link from "next/link";
import classnames from "./dashboard.module.scss";
import Button from "../../( Landing_Page )/components/Button";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import User from "./_components/User/User";
import Settings from "./_components/Settings/Settings";
import ProjectBoard from "./_components/board/ProjectBoard";
import prisma from "@/lib/prisma";

const Dashboard = () => {
  
  return (
    <section className={classnames.dashboard}>
      <div className={classnames.dashboard__container}>
        <div className={classnames.dashboard__header}>
          <User />
          {/* Battlepass */}
          <Settings/>
        </div>
        <div className={classnames.dashboard__content}>
          <ProjectBoard/>
        </div>
      </div>
    </section>
  );
};
export default withPageAuthRequired(Dashboard);
