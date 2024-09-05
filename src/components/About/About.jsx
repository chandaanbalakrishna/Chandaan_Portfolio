import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import 'bootstrap/dist/css/bootstrap.min.css';

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Who I Am</h2>
      <div className={styles.content}>


        <div className="container-fluid">
          <div className={styles.aboutItem}>
            <div className={`row ${styles.WIA}`}>
              <div className="col-md-4">
                <img src={getImageUrl("about/web-developer.png")} alt="Frontend icon" style={{ width: "300px", height: "300px" }} />
              </div>
              <div className="col-md-8 mt-2">
                <h2 className={styles.aboutH3}>Full Stack Developer</h2>
                <p className={styles.aboutP}>
                  I am a dedicated Full Stack Developer with a strong focus on delivering
                  seamless user experiences and efficient backend solutions. My expertise
                  in .NET and React Native enables me to build robust, scalable applications
                  that meet modern industry standards. Whether it's developing responsive
                  web applications or high-performance mobile apps, I ensure that each project
                  I work on is optimized for speed, security, and usability.
                </p>
              </div>
            </div>
          </div>


          <div className={styles.aboutItem}>
            <div className={`row ${styles.WIA}`}>
              <div className="col-md-4">
                <img src={getImageUrl("about/backend.png")} alt="Backend icon" style={{ width: "300px", height: "300px" }} />
              </div>
              <div className="col-md-8 mt-2">
                <h2 className={styles.aboutH3}>Backend Development</h2>
                <p className={styles.aboutP}>
                  With extensive experience in backend development, I specialize in designing
                  and implementing scalable and efficient server-side architectures. My work
                  with .NET frameworks and API development ensures that data flows seamlessly
                  between the client and server, providing a solid foundation for any application.
                  I focus on creating secure, maintainable, and high-performance backend systems
                  that power the frontend with reliability and speed.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.aboutItem}>
            <div className={`row ${styles.WIA}`}>
              <div className="col-md-4">
                <img src={getImageUrl("about/mobiledevelopment.png")} alt="Mobile icon" style={{ width: "300px", height: "300px" }} />
              </div>
              <div className="col-md-8 mt-2">
                <h2 className={styles.aboutH3}>Mobile Development</h2>
                <p className={styles.aboutP}>
                  As a Mobile Developer proficient in React Native, I create dynamic and
                  responsive mobile applications that deliver exceptional user experiences
                  across both iOS and Android platforms. My development approach focuses
                  on performance optimization, intuitive user interfaces, and seamless
                  integration with backend systems. I am passionate about leveraging
                  the latest technologies to build apps that are both functional and
                  aesthetically pleasing.
                </p>
              </div>
            </div>
          </div>


          <div className={styles.aboutItem}>
            <div className={`row ${styles.WIA}`}>
              <div className="col-md-4">
                <img src={getImageUrl("about/database-management.png")} alt="Database icon" style={{ width: "300px", height: "300px" }} />
              </div>
              <div className="col-md-8 mt-2">
                <h2 className={styles.aboutH3}>Database Management</h2>
                <p className={styles.aboutP}>
                With a solid foundation in database management, I specialize in designing,
                implementing, and maintaining efficient and secure databases. My experience
                includes working with SQL Server and other relational databases to manage
                and optimize data storage, ensuring data integrity and accessibility. I am
                adept at crafting complex queries, optimizing performance, and ensuring that
                data systems are scalable to meet the demands of growing applications.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
