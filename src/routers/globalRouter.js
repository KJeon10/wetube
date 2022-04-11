import express from "express";
import { getJoin, postJoin } from "../controllers/userController.js";
import { home } from "../controllers/videoController.js";
import { getLogin, postLogin } from "../controllers/userController.js";
import { search } from "../controllers/videoController.js";
import { publicOnlyMiddleware } from "../middlewares.js";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter
  .route("/join")
  .all(publicOnlyMiddleware)
  .get(getJoin)
  .post(postJoin);
globalRouter
  .route("/login")
  .all(publicOnlyMiddleware)
  .get(getLogin)
  .post(postLogin);
globalRouter.get("/search", search);

export default globalRouter;
