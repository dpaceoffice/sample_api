import express from 'express';
import Controller from "../controllers/default-controller.js";
import { double } from '../middlewares/sample-middleware.js';
import { validate } from '../middlewares/error-middleware.js';
import { check } from 'express-validator';

export default class Router {
    #router
    constructor() {
        var router = express.Router();
        this.#router = router;
        const controller = new Controller();
        router.get('/', controller.getIndex);
        router.post('/sample-route', [check('data').isNumeric().withMessage('That\'s impossible to do..')], validate, double, controller.handleRequest);
    }

    getRouter() {
        return this.#router;
    }

}