import "dotenv/config";
import app from "./app.js";
import connectDB from "./database/index.js";

const startServer = async () => {
  try {
    await connectDB();
    app.listen(process.env.PORT || 4000, () => {
      console.log(`App is listening at port: ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR:", error);
  }
};

startServer();

// connectDB()
//   .then(() => {
//     app.listen(process.env.PORT, () => {
//       console.log(`app is listening at port:${process.env.PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.log("ERROR:", error);
//   });
