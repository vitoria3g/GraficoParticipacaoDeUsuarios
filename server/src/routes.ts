import express  from 'express';
const routes = express.Router();
import usersControllers from './controller/users';

routes.get("/users", usersControllers.index);
routes.post("/users", usersControllers.create);
routes.put("/users/:id", usersControllers.update);
routes.delete("/users/:id", usersControllers.delete);

export default routes;