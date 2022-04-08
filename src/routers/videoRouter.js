import express from "express";
import {
  watch,
  getEdit,
  getUpload,
  postUpload,
  search,
  postEdit,
  deleteVideo,
} from "../controllers/videoController.js";

const videoRouter = express.Router();

videoRouter.get("/search", search);
videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
videoRouter.route("/upload").get(getUpload).post(postUpload);
videoRouter.route("/:id([0-9a-f]{24})/delete").get(deleteVideo);

export default videoRouter;
