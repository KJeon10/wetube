import "dotenv/config.js";
import "./db.js";
import "./models/video.js";
import app from "./server.js";
import "./models/User.js";

const PORT = 4000;

const handleListening = () => console.log(`server listening on port ${PORT}`);

app.listen(PORT, handleListening);
