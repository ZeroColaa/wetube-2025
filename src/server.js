import express from "express";

const PORT = 4590;

const app = express();

const logger = (req, res, next) => {
  //middleware
  console.log(`${req.method} ${req.url}`);
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  console.log("Allowed, you may continue");
  next();
};
const handleHome = (req, res) => {
  //finalware
  return res.send("I love middlewares");
};

const handleProtected = (req, res) => {
  return res.send("welcome to the private lounge.");
};

app.use(logger);
app.use(privateMiddleware);
//반드시 function을 send 해줘야 한다.
app.get("/", handleHome);
//button.addEventListener("click ",handleClick)와 같다
app.get("/protected", handleProtected);

const handleLogin = (req, res) => {
  return res.send("log in here");
};
app.get("/login", handleLogin);
const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
