require('dotenv').config();

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import Router from './../router';
import RouteMiddleware from './../router/router.middleware';

class Server {
  private readonly SERVER_STARTED = `Running API on port:`;

  public start = (port: any) => {
    const app = express();
    const routeMiddleware = new RouteMiddleware();

    app.use(cors());
    app.use(routeMiddleware.logRoute);
    app.use(bodyParser.json());
    app.use('/api/v1', Router);

    mongoose.connect(`${process.env.MONGO_LOCAL_CONN_URL}${process.env.MONGO_DB}` || '', { useNewUrlParser: true, useUnifiedTopology: true });

    app.listen(port);
    console.log(`${this.SERVER_STARTED} ${port}`);
  };
}

export default Server;
