import { Router } from "express";
import ClassesController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";

const routes = Router();
const classesControllers = new ClassesController();
const connectionsControler = new ConnectionsController();

routes.post("/classes", classesControllers.create);
routes.get("/classes", classesControllers.index);

routes.post("/connections", connectionsControler.create);
routes.get("/connections", connectionsControler.index);

export default routes;
