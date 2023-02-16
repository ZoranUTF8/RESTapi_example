import express from "express";

// route routers
import usersRouter from "./routes/users.js";

const app = express();
const PORT = process.env.PORT || 3001;

// Use json data in the application
app.use(express.json());

app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.send(
    "Hi from the server.To access the users use this endpoint: /users/ :)"
  );
});
app.listen(PORT, () => {
  console.log(`Server running on port: `, PORT);
});
