import React from 'react';
import ApplicationStore from '../stores/ApplicationStore';

export default function Html(props) {
    return (
        <html>
        <head>
            <meta charSet="utf-8" />
            <title>{props.context.getStore(ApplicationStore).getPageTitle()}</title>
            <meta name="viewport" content="width=device-width, user-scalable=no" />
            <link rel="stylesheet" href="/public/css/main.css" />    
            <link rel="icon" type="image/jpeg" href="https://ankihsu.com/wp-content/uploads/2017/06/favicon.jpg" />
        </head>
        <body style={{
            margin: '0'
        }}>
            <div id="app" dangerouslySetInnerHTML={{__html: props.markup}}></div>
            <script dangerouslySetInnerHTML={{__html: props.state}}></script>
            <script src={'/public/js/' + props.clientFile}></script>

        </body>
        </html>
    );
};
