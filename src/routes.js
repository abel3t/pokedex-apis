'use strict';

import body from 'body-parser';
import swaggerUi from './middlewares/swagger';

const app = require('router')();

app.use(body.json({ limit: '50mb' }));
app.use(require('./middlewares/cors'));
app.use(require('./middlewares/query'));
app.use(require('./middlewares/json'));
app.use(require('./middlewares/send'));

app.use('/apis', swaggerUi.serve, swaggerUi.setup);



app.get('/', require('./Controllers/status'));

app.use(require('./middlewares/next'));

export default app;