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
videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
videoRouter.get("/:id(\\d+)/remove", remove);
videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;
