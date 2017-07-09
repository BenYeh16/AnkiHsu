import React from 'react';
import ApplicationStore from '../stores/ApplicationStore';

export default function Html(props) {
    return (
        <html>
        <head>
            <meta charSet="utf-8" />
            <title>{props.context.getStore(ApplicationStore).getPageTitle()}</title>
            <meta name="viewport" content="width=device-width, user-scalable=no" />
            <link rel="icon" type="image/jpeg" href="https://ankihsu.com/wp-content/uploads/2017/06/favicon.jpg" />
        </head>
        <body style={{
            margin: '0',
            backgroundImage: 'url(https://ankihsu.com/wp-content/uploads/2017/07/header-background.png)',
            backgroundPosition: '50% 0%',
            backgroundSize: '54%',
            backgroundRepeat: 'no-repeat'
        }} >
            <div id="app" dangerouslySetInnerHTML={{__html: props.markup}}></div>
            <script dangerouslySetInnerHTML={{__html: props.state}}></script>
            <script src={'/public/js/' + props.clientFile}></script>

        </body>
        </html>
    );
};
