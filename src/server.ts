'use strict';

import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();

const corsOrigin = {
  origin: '*',
};

export const createServer = () => {
  const app = express();

  app.use(cors(corsOrigin));

  app.use('/', (_, res) => {
    res.send('chat online server');
  });

  return app;
};
