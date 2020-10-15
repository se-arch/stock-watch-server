import App from './app'

import * as bodyParser from 'body-parser'
import loggerMiddleware from './middleware/logger'

import SearchController from './controllers/search.controller'
import LookUpController from './controllers/lookup.controller'

const cors = require('cors');
const PORT = parseInt(process.env.PORT) || 5000;
const app = new App({
    port: PORT,
    controllers: [
        new SearchController(),
        new LookUpController(),
    ],
    middleWares: [
        cors(),
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        loggerMiddleware
    ]
})

app.listen()
