'use client';
import React from 'react';
import styles from './ComponentA.module.scss';
import { TbHandFinger } from 'react-icons/tb';

const ComponentA = () => {
    return (
        <div className={styles.compA}>
            <input name="link" className={styles.input} placeholder="Enter social media link here" />
            <button className={styles.button}>
                <TbHandFinger color="white" className={styles.icon} size={30} />
            </button>
        </div>
    );
};

export default ComponentA;
