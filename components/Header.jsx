import React from 'react';

export default function Header() {
    return (
        <div style={{
            position: 'relative',
            width: '100%',
            height: '293.5px',
            backgroundImage: 'url(https://ankihsu.com/wp-content/uploads/2017/07/header-background.png)',
            backgroundPosition: '50% 0%',
            backgroundSize: '54%',
            backgroundRepeat: 'no-repeat'
        }}>
           <img
                src="https://ankihsu.com/wp-content/uploads/2017/06/favicon.jpg"
                style={{
                    width: '69px',
                    height: '69px',
                }}
            />
        </div>
    );
};