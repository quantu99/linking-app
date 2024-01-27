'use client';
import React from 'react';
const ComponentC = ({ url, fetching }) => {
    return (
        <div
            style={{
                justifyContent: 'flex-end',
                flexDirection: 'row-reverse',
                display: 'flex',
                gap: '30px',
                padding: '20px',
                borderRadius: '10px',
            }}
            className="a"
        >
            {fetching ? (
                <p>Loading...</p>
            ) : (
                <>
                    {url?.map((urlItem, index) => (
                        <div key={index} className="social-media-iframe-container">
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
        width: '100%',
        height: '400px',
        maxHeight: '400px',
    };
    if (urlItem.includes('youtube.com')) {
        // YouTube iframe
        const videoId = urlItem.split('v=')[1];
        return (
            <iframe
                style={iframeStyle}
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube Video"
                allowFullScreen
            ></iframe>
        );
    } else if (urlItem.includes('tiktok.com')) {
        // TikTok iframe
        const videoId = urlItem.split('/video/')[1];
        return (
            <iframe
                style={iframeStyle}
                src={`https://www.tiktok.com/embed/v2/${videoId}`}
                title="TikTok Video"
                allowFullScreen
            ></iframe>
        );
    } else if (urlItem.includes('instagram.com')) {
        // Instagram iframe
        const postId = urlItem.split('/p/')[1].split('/')[0];
        return (
            <iframe
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
