import express from 'express';
import cors from 'cors';
import categories from './categories/router';

const PORT : string|number = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use('/api/categories', categories);

app.listen(PORT, ()=>console.log('Server started on'+PORT));