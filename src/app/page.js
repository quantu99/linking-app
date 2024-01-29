'use client';
import Image from 'next/image';
import styles from './page.module.scss';
import { FaYoutube, FaTiktok, FaInstagram } from 'react-icons/fa';
import { MdOutlineListAlt } from 'react-icons/md';
import ComponentA from '@/components/componentA/ComponentA';
import ComponentB from '@/components/componentB/ComponentB';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllLink } from '@/redux/apiRequest';
import ComponentC from '@/components/componentC/ComponentC';
import Link from 'next/link';
export default function Home() {
    const dispatch = useDispatch();
    const social = useSelector((state) => state.link.getAll?.allLink);
    const fetching = useSelector((state) => state.link.getAll?.isFetching);
    const url = social?.map((item) => item.url);
    useEffect(() => {
        getAllLink(dispatch);
    }, [dispatch]);
    const links = [
        {
            title: 'youtube',
            icon: <FaYoutube size={30} />,
        },
        {
            title: 'tiktok',
            icon: <FaTiktok size={30} />,
        },
        {
            title: 'instagram',
            icon: <FaInstagram size={30} />,
        },
        {
            title: 'url list',
            icon: <MdOutlineListAlt size={30} />,
        },
    ];
    function capitalizeString(str) {
        return str.replace(/\b\w/g, function (l) {
            return l.toUpperCase();
        });
    }
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.logoContainer}>
                    <Link style={{ cursor: 'pointer' }} href="/">
                        <Image src="/logo.png" height={60} width={60} alt="logo" className={styles.logo} />
                    </Link>
                    <div className={styles.search}>
                        <ComponentA />
                    </div>
                </div>
                <div className={styles.menuContainer}>
                    <div className={styles.menu}>
                        {links.map((link) =>
                            link.title !== 'url list' ? (
                                <Link href={`/${link.title}`} key={link.title} className={styles.linkContainer}>
                                    {link.icon}
                                    <div className={styles.notification}>{capitalizeString(link.title)}</div>
                                </Link>
                            ) : (
                                <label key={link.title} className={styles.linkContainer}>
                                    <div htmlFor="checkbox" href={`/${link.title}`} className={styles.listContainer}>
                                        {link.icon}
                                    </div>
                                    <input type="checkbox" className={styles.checkbox} id="checkbox" />
                                    <div className={styles.urlList}>
                                        <ComponentB url={url} />
                                    </div>
                                    <label htmlFor="checkbox" className={styles.overlay}></label>
                                    <div className={styles.notification}>{capitalizeString(link.title)}</div>
                                </label>
                            ),
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                <ComponentC url={url} fetching={fetching} />
            </div>
        </div>
    );
}
