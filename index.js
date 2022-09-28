import express from "express";
import bodyParser from "body-parser";

// route routers
import usersRouter from "./routes/users.js";

const app = express();
const PORT = 5000;
// Use json data in the application
app.use(bodyParser.json());

app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Server running on port: `, PORT);
});
