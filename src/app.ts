import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import categories from './categories/router';
import words from './categories/router-words';

const PORT : string|number = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/categories', categories);
app.use('/api/words', words);

app.listen(PORT, ()=>console.log('Server started on 3000 '+PORT));