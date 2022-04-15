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
import { protectorMiddleware, videoUpload } from "../middlewares.js";

const videoRouter = express.Router();

videoRouter.get("/search", search);
videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter
  .route("/:id([0-9a-f]{24})/edit")
  .all(protectorMiddleware)
  .get(getEdit)
  .post(postEdit);
videoRouter
  .route("/upload")
  .all(protectorMiddleware)
  .get(getUpload)
  .post(videoUpload.single("video"), postUpload);
videoRouter
  .route("/:id([0-9a-f]{24})/delete")
  .all(protectorMiddleware)
  .get(deleteVideo);

export default videoRouter;
