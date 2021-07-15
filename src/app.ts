import express from 'express';
import cors from 'cors';
import categories from './categories/router';

const port = process.env.PORT || 3000


const app = express();
app.use(cors());
app.use('/api/categories', categories);

app.listen(port, ()=>console.log('Server started on '+port));