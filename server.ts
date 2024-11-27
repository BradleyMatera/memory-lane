import express from 'express';
import payload from 'payload';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use('/api', payload.rest());

payload.init({
  express: app,
  secret: process.env.PAYLOAD_SECRET || 'default-secret',
  mongoURL: process.env.MONGODB_URI || 'mongodb://localhost:27017/memory-lane',
  onInit: () => {
    console.log('Payload CMS initialized successfully');
  },
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});