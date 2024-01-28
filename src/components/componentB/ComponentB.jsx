'use client';
import React from 'react';
import styles from './ComponentB.module.scss';
import Link from 'next/link';
const ComponentB = ({ url }) => {
    return (
        <div className={styles.compB}>
            {url?.map((item, index) => (
                <Link target="__blank" href={item} style={{ display: 'flex', gap: '10px' }}>
                    <span>{index + 1}.</span>
                    <span key={item}>{item}</span>
                </Link>
            ))}
        </div>
    );
};

export default ComponentB;
