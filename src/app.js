import cors from 'cors';
import express from 'express';
import fileRouteConfig from './config/fileRoutes.cjs';
import routes from './routes.js';
import 'dotenv/config';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/product-file', fileRouteConfig);
app.use('/category-file', fileRouteConfig);

app.use(routes);

export default app;
