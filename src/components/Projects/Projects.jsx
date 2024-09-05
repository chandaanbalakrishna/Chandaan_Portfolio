import React from "react";
import projects from "../../data/projects.json"; 
import styles from "../Projects/Projects.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.content}>
        <div className="container-fluid">
          {projects.map((project, index) => (
            <div className={styles.aboutItem} key={index}>
              <div className={`row ${styles.WIA}`}>
                {/* Project Details */}
                <div className="col-md-12 mt-2">
                  <h3 className={styles.aboutH3}>{project.title}</h3>
                  <p className={styles.aboutP}>{project.description}</p>

                  {/* Skills */}
                  <h3>Technologies Used</h3>
                  <ul className={styles.skills}>
                    {project.skills.map((skill, id) => (
                      <li key={id} className={styles.skill}>
                        {skill}
                      </li>
                    ))}
                  </ul>

                  {/* Try It Out Button */}
                  <div className="text-end mt-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn btn-outline-secondary ${styles.link}`}
                    >
                      Try It Out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
