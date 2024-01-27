'use client';
import React, { useState } from 'react';
import styles from './ComponentA.module.scss';
import { TbHandFinger } from 'react-icons/tb';
import { addNewLink } from '@/redux/apiRequest';
import { useDispatch } from 'react-redux';

const ComponentA = () => {
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        link: '',
    });
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = () => {
        const newLink = {
            url: values.link,
        };
        addNewLink(newLink, dispatch);
    };
    return (
        <div className={styles.compA}>
            <input
                onChange={handleChange}
                name="link"
                className={styles.input}
                placeholder="Enter social media link here"
            />
            <button onClick={handleSubmit} className={styles.button}>
                <TbHandFinger color="white" className={styles.icon} size={30} />
                <div className={styles.notification}>Click here to add new</div>
            </button>
        </div>
    );
};

export default ComponentA;
