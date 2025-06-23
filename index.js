import express from 'express';
import fnMain from './src/controller/controller.js';

const app = express();

app.use(express.json());
app.use(fnMain)

app.listen(3000, () => {
    if (3000) {
        console.log('connected success')
    } else {
        console.log('errol')
    }   
});

