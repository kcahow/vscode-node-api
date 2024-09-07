import express, { Express, Router } from 'express';
const questionRouter = express.Router();

import { getQuestions } from '../controllers/questionController';

questionRouter.get('/', getQuestions);

export{
    questionRouter
}