import express, { Express } from 'express';
const routes = express.Router();

import { questionRouter } from './questionRoutes';

routes.use('/questions', questionRouter);


export{
    routes
}