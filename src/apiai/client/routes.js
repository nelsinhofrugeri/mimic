'use strict';

const Handler = require('./handler');
const handler = new Handler();

module.exports = [
    {
        method: 'GET',
        path: '/v1/apiai/client',
        handler: handler.get
    },
    {
        method: 'POST',
        path: '/v1/apiai/client',
        handler: handler.post
    }
]
