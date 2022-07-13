import express from 'express';
import bodyParser from "body-parser";
import Router from './routes/default-router.js';

const app = express();
const port = 5000;
const routes = new Router().getRouter();

function setupApp() {
    app.use(express.static('view/build'))
    app.use(bodyParser.json());
    app.use('/', routes);
}
setupApp();
app.listen(port, () => console.log(`listening on... ${port}`));