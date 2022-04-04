import express from "express";

const PORT = 4000;

const app= express();

app.get("/", () => console.log("get request to home!"));

const handleListening = () =>
console.log(`server listening on port ${PORT}`);

app.listen(PORT, handleListening);