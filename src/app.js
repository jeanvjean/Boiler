import 'dotenv/config';
import express from 'express';
import expressConfig from './config/express';
import { connection } from './config/db';

const port = process.env.PORT || 8080;

const app = express();

expressConfig(app);

connection(app, port);

export default app;
