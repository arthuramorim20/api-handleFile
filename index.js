import express from 'express';
import fnRoutes from './src/controller/controller.js';

const app = express();

app.use(express.json());
app.use(fnRoutes)

app.listen(3000, () => {
    if (3000) {
        console.log('connected success')
    } else {
        console.log('erro')
    }   
});

