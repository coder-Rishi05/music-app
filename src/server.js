import "dotenv/config";
import { port } from "./utils/constants.js";
import { PORT } from "./utils/env.js";
import { app } from "../app.js";
import { connectDb } from "./db/db.js";

connectDb()
  .then(() => {
    console.log("database connected successfully");
    app.listen(port, () => {
      console.log(`server running at ${PORT || port}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });
