'use client';
import React from 'react';
import styles from './ComponentB.module.scss';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
const ComponentB = ({ url }) => {
    return (
        <div key={uuidv4()} className={styles.compB}>
            {url?.map((item, index) => (
                <Link key={item} target="__blank" href={item} style={{ display: 'flex', gap: '10px' }}>
                    <span>{index + 1}.</span>
                    <span>{item}</span>
                </Link>
            ))}
        </div>
    );
};

export default ComponentB;
