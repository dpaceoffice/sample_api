import path from 'path';

const __dirname = path.resolve('build/');
export default class Controller {
    getIndex(req, res) {
        res.sendFile('index.html', { root: __dirname });
    }
    handleRequest(req, res) {
        req.body.msg = 'The number ' + req.body.data / 2 + ' has been doubled: ' + req.body.data;
        res.send(req.body);
    }
}