import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});
import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
  .then(()=>{
    app.listen(process.env.PORT)
    console.log(`Server running on port ${process.env.PORT}`);

  })
  .catch((err) => {
    console.error(`Error connecting to the database: ${err.message}`);
    process.exit(1); // exit the application with an error code
  });
