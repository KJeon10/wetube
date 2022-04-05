import express from "express";
import {
  watch,
  getEdit,
  remove,
  getUpload,
  postUpload,
  search,
  postEdit,
} from "../controllers/videoController.js";

const videoRouter = express.Router();

videoRouter.get("/search", search);
videoRouter.route("/upload").get(getUpload).post(postUpload);
videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d)/edit").get(getEdit).post(postEdit);
videoRouter.get("/:id(\\d+)/remove", remove);

export default videoRouter;
