'use strict';

import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    requiered: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    requiered: true,
    unique: true,
  },
  password: {
    type: String,
    requiered: true,
  },
}, {
  timestamps: true,
});

export const User = mongoose.model('User', UserSchema);
