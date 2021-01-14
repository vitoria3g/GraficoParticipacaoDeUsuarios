import {Request, Response} from 'express';
import knex from '../database/connection';

class usersControllers {

  async index(req: Request, resp: Response){
    const users = await knex('users')
                       .select('*')
    return resp.json(users);
  }

  async create(req: Request, resp: Response) {
    const {first_name, last_name, participation} = req.body; //desestruturação

    if(first_name == "" || last_name == "" || participation < 0){
      return resp.status(400).json({"message": "Invalid data."});
    }
    
    let data = {first_name, last_name, participation}

    //Insert
    const user = await knex('users').insert(data);

    if(!user){
      return resp.status(500).json({"message": "Error registering user!"})
    }

    return resp.status(201).json({"message": "Sucess"});
  }

  async update(req: Request, resp: Response) {
    
    const {id} = req.params;
    const {first_name, last_name, participation} = req.body;

    if(first_name == "" && last_name == "" || participation < 0){
      return resp.status(400).json({"message": "Invalid data."});
    }

   //Update
    const user = await knex('users')
                      .where({'id': id})
                      .update({
                               'first_name': first_name,
                               'last_name': last_name,
                               'participation': participation
                             });

    if(!user){
      return resp.status(500).json({"message": "Error update user!"})
    }

    return resp.json({"message": "Sucess"});
  }

  async delete(req: Request, resp: Response) {
    
    const {id} = req.params;
    
    const user = await knex('users')
                      .where({'id': id})
                      .del()

    if(!user){
      return resp.status(500).json({"message": "Error delete user!"})
    }

    return resp.json({"message": "Sucess"});
  }

}

export default new usersControllers();