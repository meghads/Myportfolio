import React from 'react';
import styles from './About.module.css';
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} 
            alt="me-sitting eith a laptop" 
            className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")}
                alt='cursor-icon'
                />
                <div className={styles.aboutItemText}>
                    <h3>Front-end Development</h3>
                    <p>I'm a Front-end developer with experience in building responsive websites
                        and optimised sites.
                    </p>
                </div>
                </li>
                <li className={styles.aboutItem}><img src={getImageUrl("about/serverIcon.png")}
                alt='server-icon'/>
                <div className={styles.aboutItemText}>
                    <h3>Database</h3>
                    <p>I have experience in maintaining database using Firebase and Mongodb. I'm currently
                        working on Node.js as a part of backend technology.
                    </p>
                </div>
                </li>
                <li className={styles.aboutItem}><img src={getImageUrl("about/uiIcon.png")}
                alt='cursor-icon'
                />
                <div className={styles.aboutItemText}>
                    <h3>C</h3>
                    <p>I'm skilled in working with Data structures and Algorithms using C and able to effectively
                        apply the concepts of DSA in solving real world problems.
                    </p>
                </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
