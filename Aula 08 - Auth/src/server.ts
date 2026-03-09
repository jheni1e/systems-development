import express from 'express';
import routes from './routes/routes.ts';
import connectDB from './database/database.ts';

const app = express();
const port = 8080;

connectDB();
routes(app);

app.get('/', (req, res) => {
    res.status(200).send({ response: 'api funcionando!' })
})

app.listen(port, () =>
    console.log(`Acesse: http://localhost:${port}/`)
);