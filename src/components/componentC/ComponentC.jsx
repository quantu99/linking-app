'use client';
import React from 'react';
import { FaGear } from 'react-icons/fa6';
import styles from './ComponentC.module.scss';
const ComponentC = ({ url, fetching }) => {
    return (
        <div className={styles.compC}>
            {fetching ? (
                <div className={styles.iconContainer}>
                    <FaGear size={50} className={styles.icon} />
                    <p>Please wait for loading...</p>
                </div>
            ) : (
                <>
                    {url?.map((urlItem, index) => (
                        <div key={index} className="iframeContainer">
                            {getIframe(urlItem)}
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};
const getIframe = (urlItem, index) => {
    const iframeStyle = {
        borderRadius: '10px',
        width: '600px',
    };
    if (urlItem?.includes('youtube.com')) {
        // YouTube iframe
        const videoId = urlItem.split('v=')[1];
        return (
            <iframe
                style={iframeStyle}
                height={600}
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube Video"
                allowFullScreen
            ></iframe>
        );
    } else if (urlItem?.includes('tiktok.com')) {
        // TikTok iframe
        const videoId = urlItem.split('/video/')[1];
        return (
            <iframe
                height={600}
                style={iframeStyle}
                src={`https://www.tiktok.com/embed/v2/${videoId}`}
                title="TikTok Video"
                allowFullScreen
            ></iframe>
        );
    } else if (urlItem?.includes('instagram.com')) {
        // Instagram iframe
        const postId = urlItem.split('/p/')[1].split('/')[0];
        return (
            <iframe
                height={600}
                key={index}
                style={iframeStyle}
                src={`https://www.instagram.com/p/${postId}/embed/`}
                title="Instagram Post"
                allowFullScreen
            ></iframe>
        );
    }

    return null;
};

export default ComponentC;
