import express from 'express';
import cors from 'cors';
import categories from './categories/router';


const app = express();
app.use(cors());
app.use('/api/categories', categories);

app.listen(3000, ()=>console.log('Server started on 3000'));