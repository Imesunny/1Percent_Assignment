const express = require("express");
const mongoDBConnection = require("./config/db");
const userRouter = require("./routes/user.routes");
const app = express();
require("dotenv").config();

app.use(express.json());
const PORT = parseInt(process.env.PORT);
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the app!" });
});


app.use('/user', userRouter);

app.listen(PORT, async () => {
  try {
    await mongoDBConnection;
    console.log(`Server running on port ${PORT}`);
  } catch (error) {
    console.log("error while listening on port");
  }
});
