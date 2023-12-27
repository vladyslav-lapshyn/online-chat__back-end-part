'use strict';

import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { initDB } from './utils/initDB.js';

dotenv.config();

const corsOrigin = {
  origin: '*',
};

export const createServer = () => {
  const app = express();

  initDB();

  app.use(cors(corsOrigin));

  app.use('/', (_, res) => {
    res.send('chat online server');
  });

  return app;
};
