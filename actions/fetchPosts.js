'use strict';

import request from 'request';

module.exports = {
    getPosts: function (context, payload, done) {
        payload = payload || {};

        
        request('https://ankihsu.com/wp-json/wp/v2/posts', function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            //console.log('body:', body); // Print the HTML for the Google homepage.

            if (error) {
                console.log('error', error);
                return done && done();
            }

            context.dispatch('FETCH_POST_SUCCESS', body);

            return done && done();
        });
        
        
        // shorthand syntax, buffered response
        /*
        http.get('https://ankihsu.com/wp-json/wp/v2/posts', function (err, res) {
	        if (err) {
		        console.error(err);
		        return;
	        }
	        console.log(res.code, res.headers, res.buffer.toString());
        });
        */
    },

    getCategories: function (context, payload, done) {
        payload = payload || {};

        request('http://ankihsu.com/wp-json/wp/v2/categories', function (error, response, body) {
            if (error) {
                console.log('error', error);
                return done && done();
            }

            context.dispatch('FETCH_CATEGORY_SUCCESS', JSON.parse(body));

            return done && done();
        })
    }
    
};

