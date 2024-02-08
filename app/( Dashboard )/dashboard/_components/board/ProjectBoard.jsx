import classnames from "./projectboard.module.scss";
import prisma from '@lib'

const getProjects = async () => {
  const projects = await prisma.project.findMany({
    select: {
        id: true,
        title: true,
  }})
  return projects;
}
export default async function ProjectBoard() {
    const projects = await getProjects();
  return (
    <section className={classnames.projectboard}>
        <div className={classnames.projectboard__container}>
            <div className={classnames.projectboard__header}>
                {/* Project Select Dropdown */}
                <div className={classnames.projectboard__views}>
                    {/* View radio buttons */}
                </div>
                <div className={classnames.projectboard__actions}>
                    {/* Sort */}
                </div>
            </div>
            <div className={classnames.projectboard__content}></div>
        </div>
    </section>
  )
}
