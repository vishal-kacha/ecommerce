import * as dotenv from "dotenv";
dotenv.config();
import app from "./server.js";

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
