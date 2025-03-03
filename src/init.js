import "./db";
import "./models/video";
import app from "./server";

const PORT = 4590;

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
