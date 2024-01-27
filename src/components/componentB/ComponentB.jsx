import React from 'react';
import styles from './ComponentB.module.scss';
import Link from 'next/link';
const ComponentB = ({ links }) => {
    return (
        <div className={styles.compB}>
            {links.map((link) => (
                <Link href={`/${link.title}`} key={link.title} className={styles.linkContainer}>
                    {link.icon}
                    <div className={styles.notification}>{link.title}</div>
                </Link>
            ))}
        </div>
    );
};

export default ComponentB;
