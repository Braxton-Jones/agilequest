import classnames from '../projectboard.module.scss'
export default function Descriptive({project}) {
    console.log(project)
    if(!project) return null
  return <section className={classnames.project_description}>
    <div className={classnames.project_description__container}>
        <div className={classnames.project_description__header}>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
        </div>
        <div className={classnames.project_description__content}>
            <div className={classnames.project_description__content__sprints}>
            <h2>Sprints</h2>
            <ul>
                {project.sprints.map((sprint) => {
                return <li key={sprint.id}>
                    <h3>{sprint.title}</h3>
                    <p>{sprint.description}</p>
                </li>;
                })}
            </ul>
            </div>
        </div>
    </div>
  </section>;
}
