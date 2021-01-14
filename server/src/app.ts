import express from 'express';
import routes from './routes';
import cors from 'cors';
//import path from 'path';

//Para mudanças feitas nas configurações do banco de dados
// require('dotenv').config({
//   path: process.env.NODE_ENV === 'test' ?  '.env.test' : '.env'
// });

class AppController {
  
  public express: express.Application;

  public constructor(){
    this.express = express();
    this.middlwares();
    this.useCors();
    this.routes();
  }

  private middlwares(){
    this.express.use(express.json());
  }
  
  private routes(){
    this.express.use(routes);
  }

  private useCors(){
    this.express.use(cors());
  }
}

export default new AppController().express;