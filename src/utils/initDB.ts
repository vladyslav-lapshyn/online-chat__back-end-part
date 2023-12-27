'use strict';

import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

export const initDB = () => {
  const { MONGO_DB_URI } = process.env;

  mongoose
    .connect(MONGO_DB_URI as string)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log(`MongoDB Error: ${error}`));
};
