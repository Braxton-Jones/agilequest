import classnames from "./projectboard.module.scss";
import prisma from "@/lib/prisma";
import ProjectBoardContainer from "./ProjectBoardContainer";

const getProjects = async () => {
  const projects = await prisma.project.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      sprints: {
        select: {
          id: true,
          title: true,
          description: true,
        },
      },
    },
  });
  return projects;
};
export default async function ProjectBoard() {
  const projects = await getProjects();
  return (
    <section className={classnames.projectboard}>
      <ProjectBoardContainer projects={projects} />
    </section>
  );
}
