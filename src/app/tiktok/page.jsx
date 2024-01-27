'use client';
import React from 'react';
import Image from 'next/image';
import styles from '../page.module.scss';
import { FaYoutube, FaTiktok, FaInstagram } from 'react-icons/fa';
import ComponentA from '@/components/componentA/ComponentA';
import ComponentB from '@/components/componentB/componentB';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllLink } from '@/redux/apiRequest';
import ComponentC from '@/components/componentC/ComponentC';
import Link from 'next/link';
export default function TiktokPage() {
    const path = 'tiktok';

    const dispatch = useDispatch();
    const social = useSelector((state) => state.link.getAll?.allLink);
    const fetching = useSelector((state) => state.link.getAll?.isFetching);
    const url = social?.map((s) => s.url);
    const tiktokUrls = url?.filter((u) => u.includes('tiktok'));

    useEffect(() => {
        getAllLink(dispatch);
    }, []);

    const links = [
        {
            title: 'youtube',
            icon: <FaYoutube size={30} color={path === 'youtube' && 'red'} />,
        },
        {
            title: 'tiktok',
            icon: <FaTiktok size={30} color={path === 'tiktok' && 'pink'} />,
        },
        {
            title: 'instagram',
            icon: <FaInstagram size={30} color={path === 'instagram' && 'orange'} />,
        },
    ];
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.logoContainer}>
                    <Link href="/">
                        <Image src="/logo.png" height={60} width={60} alt="logo" className={styles.logo} />
                    </Link>
                    <div className={styles.search}>
                        <ComponentA />
                    </div>
                </div>
                <div className={styles.menu}>
                    <ComponentB links={links} path={path} />
                </div>
            </div>
            <div className={styles.content}>
                <h1>Tiktok</h1>
                <ComponentC url={tiktokUrls} />
            </div>
        </div>
    );
}
