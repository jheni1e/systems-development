import express from 'express';
import routes from './routes/routes.ts';
import connectDB from './database/database.ts';
import cors from 'cors';

const app = express();
const port = 8080;

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

connectDB();
routes(app);

app.get('/', (req, res) => {
    res.status(200).send({ response: 'api funcionando!' })
})

app.listen(port, () =>
    console.log(`Acesse: http://localhost:${port}/`)
);