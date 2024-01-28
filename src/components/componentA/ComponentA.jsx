'use client';
import React, { useState, useEffect } from 'react';
import styles from './ComponentA.module.scss';
import { TbHandFinger } from 'react-icons/tb';
import { addNewLink, getAllLink } from '@/redux/apiRequest';
import { useDispatch } from 'react-redux';
import validation from './validation';
const ComponentA = () => {
    const dispatch = useDispatch();
    const [allErrors, setAllErrors] = useState(false);
    const [errors, setErrors] = useState({});
    const [hasErrors, setHasErrors] = useState(false);
    useEffect(() => {
        if (errors.link !== undefined && errors.link !== null) {
            setHasErrors(true);
            const timeout = setTimeout(() => {
                setHasErrors(false);
            }, 3000);
            return () => clearTimeout(timeout);
        }
    }, [errors.link]);
    const [values, setValues] = useState({
        link: '',
    });
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
        setErrors({});
        setHasErrors(false);
    };
    useEffect(() => {
        const youtubeUrl = /^(https?:\/\/)?(www\.)?(youtube\.com\/(c\/)?|youtu\.be\/)/;
        const instagramUrl = /^(https?:\/\/)?(www\.)?instagram\.com\//;
        const tiktokUrl = /^(https?:\/\/)?(www\.)?tiktok\.com\//;
        const isValid =
            values.link !== '' &&
            !values.link.indexOf(' ') !== -1 &&
            ((youtubeUrl.test(values.link) && values.link.includes('v=')) ||
                (instagramUrl.test(values.link) && values.link.includes('?utm_source=')) ||
                (tiktokUrl.test(values.link) && values.link.includes('@')));
        setAllErrors(isValid);
    }, [values]);
    const handleSubmit = async () => {
        const newLink = {
            url: values.link,
        };
        setErrors(validation(values));
        if (allErrors) {
            await addNewLink(newLink, dispatch);
            setValues({
                link: '',
            });
            getAllLink(dispatch);
        }
    };
    return (
        <div className={styles.compA}>
            <input
                value={values.link}
                onChange={handleChange}
                name="link"
                className={styles.input}
                placeholder="Enter social media link here"
            />
            <button onClick={handleSubmit} className={styles.button}>
                <TbHandFinger color="white" className={styles.icon} size={30} />
                <div className={styles.notification}>Click here to add new</div>
            </button>
            {hasErrors && <div className={styles.notifications}>{errors.link}</div>}
        </div>
    );
};

export default ComponentA;
