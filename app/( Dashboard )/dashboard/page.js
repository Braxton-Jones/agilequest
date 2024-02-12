import Link from "next/link";
import classnames from "./dashboard.module.scss";
import Button from "../../( Landing_Page )/components/Button";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import User from "./_components/User/User";
import Menu from "./_components/settings/Menu";
import ProjectBoard from "./_components/board/ProjectBoard";
import Modal from "./_components/modals/Modal";
import SettingsMenu from "./_components/modals/SettingsMenu";
import CreateProject from "./_components/modals/CreateProject";
import { getSession } from "@auth0/nextjs-auth0";
import CreateUser from "./_components/modals/CreateUser";
import CreateInitProjectFlow from "./_components/modals/CreateInitProjectFlow";
import { Suspense } from "react";

export const isUserInDatabase = async (nickname) => {
  console.log(nickname, "nickname");
  const user = await prisma.user.findUnique({
    where: {
      gmailNickname: nickname,
    },
  });
  if (!user) {
    return false;
  }
  return true;
}

const Dashboard = async ({searchParams}) => {
  const session = await getSession();
  const showSettings = searchParams?.settings;
  const showCreateProject = searchParams?.createProject;
  const isUser = await isUserInDatabase(session.user.nickname);
  const showUserSuccess = searchParams?.newUser;
  return (<>
    {!isUser && <Modal><CreateUser/></Modal>}
    {showSettings && <Modal><SettingsMenu/></Modal>}
    {showCreateProject && <Modal><CreateProject/></Modal>}
    {showUserSuccess && <Modal><CreateInitProjectFlow/></Modal>}
    <section className={classnames.dashboard}>
      <div className={classnames.dashboard__container}>
        <div className={classnames.dashboard__header}>
          <User />
          {/* Battlepass */}
          <Menu />
        </div>
        <Suspense fallback={<p>Loading..</p>}></Suspense>
        <div className={classnames.dashboard__content}>
          <ProjectBoard />
        </div>
      </div>
    </section>
    </>
  );
};
export default withPageAuthRequired(Dashboard);
