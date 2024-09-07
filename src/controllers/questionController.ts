import { Request, Response } from 'express';
import { pool } from '../config/dbConfig';

const getQuestions = async (req:Request, res:Response) =>{
    await pool.query("SELECT * FROM QUESTIONS" , (error, results) => {
        if(error){
            res.json({
                error: error.message
            }).status(500);
        }
        res.json(results.rows).status(200);
    });
};

export {
    getQuestions
}