import "dotenv/config";
import app from "./app.js";
import connectDB from "./db/index.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`app is listening at port:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("ERROR:", error);
  });
