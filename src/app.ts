import express, { Express, Request, Response } from 'express';
import { routes } from './routes/index';

const app:Express = express();
const port = 3030;

app.use(express.json());
app.use('/', routes);


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});
