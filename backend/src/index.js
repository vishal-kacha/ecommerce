import * as dotenv from "dotenv";
dotenv.config();
import app from "./server.js";
import connectDB from "./utils/db.js";

app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`http://localhost:${process.env.PORT}`);
});
