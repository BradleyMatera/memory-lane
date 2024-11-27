import express, { Request, Response } from 'express';
import payload from 'payload';
import next from 'next';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const start = async () => {
  await app.prepare();

  const server = express();

  server.use('/admin', express.static(path.resolve(__dirname, '../../public')));

  await payload.init({
    secret: process.env.PAYLOAD_SECRET as string,
    mongoURL: process.env.MONGODB_URI as string,
    express: server,
  });

  server.get('*', (req: Request, res: Response) => handle(req, res));

  server.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on http://localhost:${process.env.PORT || 3000}`);
  });
};

start();