import { Express } from 'express';
import express from 'express';
import person from './personRoutes.ts';

export default function (app: Express) {
    app
        .use(express.json())
        .use('/api/person', person)
}
