import { Express } from 'express';
import express from 'express';
import project from './projectRoutes.ts';
import step from './stepRoutes.ts';

export default function (app: Express) {
    app
        .use(express.json())
        .use('/api/project', project)
        .use('/api/step', step)
}