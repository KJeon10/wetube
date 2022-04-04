import express from "express";

const userRouter = express.Router();

const handlEditUser = (req, res) => res.send("Edit user");

userRouter.get("/edit", handlEditUser);

export default userRouter;
