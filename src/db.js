import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/clonetube");

const db = mongoose.connection;
const handleOpen = () => console.log("😀Connected");

db.on("error", (error) => console.log("😡DB error", error));
db.once("open", handleOpen);
