"use client";
import { useState } from "react";
import classnames from "./projectboard.module.scss";
import Board from "./views/Board";
import Table from "./views/Table";
import Descriptive from "./views/Descriptive";
import List from "./views/List";
import Link from "next/link";
export default function ProjectBoardContainer(params) {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [projectOne, projectTwo, projectThree] = params.projects || []
  const [selectedProject, setSelectedProject] = useState(projectOne);
  const [selectedOption, setSelectedOption] = useState("Home");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleProjectToggle = () => {
    setIsProjectModalOpen(!isProjectModalOpen);
  };
  function handleProjectSelect(project) {
    if (!project) {
      ;
    }
    setSelectedProject(project);
    setIsProjectModalOpen(false);
  }
  
  return (
    <div className={classnames.projectboard__container}>
      <div className={classnames.projectboard__header}>
        <div className={classnames.projectboard__project_select}>
          <h5
            className={classnames.projectboard__project_titles}
            onClick={handleProjectToggle}
          >
            Project:{" "}
            {selectedProject && selectedProject.title
              ? selectedProject.title
              : "No Project Selected"}
          </h5>
          {isProjectModalOpen && (
            <ul className={classnames.projectboard__projects_list}>
              <li
                className={classnames.selected}
                onClick={() => handleProjectSelect(projectOne)}
              >
                {projectOne ? projectOne.title : <Link href="/dashboard/?createProject=true">Add New Project</Link>}
              </li>
              <li onClick={() => handleProjectSelect(projectTwo)}>
                {projectTwo ? projectTwo.title : <Link href="/dashboard/?createProject=true">Add New Project</Link>}
              </li>
              <li onClick={() => handleProjectSelect(projectThree)}>
                {projectThree ? projectThree.title : <Link href="/dashboard/?createProject=true">Add New Project</Link>}
              </li>
            </ul>
          )}
        </div>
        <div className={classnames.projectboard__views}>
            <div className={classnames.radio_inputs}>
            <label className={classnames.radio}>
                <input
                  type="radio"
                  name="radio"
                  value="Home"
                  checked={selectedOption === "Home"}
                  onChange={handleOptionChange}
                  disabled={!selectedProject}
                />
                <span className={classnames.name}>Project Home</span>
              </label>
              <label className={classnames.radio}>
                <input
                  type="radio"
                  name="radio"
                  value="Board"
                  checked={selectedOption === "Board"}
                  onChange={handleOptionChange}
                  disabled={!selectedProject}
                />
                <span className={classnames.name}>Board</span>
              </label>
              <label className={classnames.radio}>
                <input
                  type="radio"
                  name="radio"
                  value="Table"
                  checked={selectedOption === "Table"}
                  onChange={handleOptionChange}
                  disabled={!selectedProject}
                />
                <span className={classnames.name}>Table</span>
              </label>
              <label className={classnames.radio}>
                <input
                  type="radio"
                  name="radio"
                  value="List"
                  checked={selectedOption === "List"}
                  onChange={handleOptionChange}
                  disabled={!selectedProject}
                />
                <span className={classnames.name}>List</span>
              </label>
              
            </div>
          </div>
      </div>
      <div className={classnames.projectboard__content}>
        {(() => {
          switch (selectedOption) {
            case "Board":
              return <Board />;
            case "Table":
              return <Table />;
            case "List":
              return <List  />;
              case "Home":
              return <Descriptive  />;
            default:
              return <Descriptive  />;
          }
        })()}
      </div>
    </div>
  );
}
