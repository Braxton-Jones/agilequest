import Link from "next/link";
import classnames from "./dashboard.module.scss";
import Button from "../../( Landing_Page )/components/Button";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import User from "./_components/User/User";
import Menu from "./_components/settings/Menu";
import ProjectBoard from "./_components/board/ProjectBoard";
import Modal from "./_components/modals/Modal";
import SettingsMenu from "./_components/modals/user_settings/SettingsMenu";
import CreateProject from "./_components/modals/user_settings/CreateProject";
import { getSession } from "@auth0/nextjs-auth0";
import CreateUser from "./_components/modals/CreateUser";

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
  console.log(isUser, "is user");
  return (<>
    {!isUser && <Modal><CreateUser/></Modal>}
    {showSettings && <Modal><SettingsMenu/></Modal>}
    {showCreateProject && <Modal><CreateProject/></Modal>}
    <section className={classnames.dashboard}>
      <div className={classnames.dashboard__container}>
        <div className={classnames.dashboard__header}>
          <User />
          {/* Battlepass */}
          <Menu />
        </div>
        <div className={classnames.dashboard__content}>
          <ProjectBoard />
        </div>
      </div>
    </section>
    </>
  );
};
export default withPageAuthRequired(Dashboard);
