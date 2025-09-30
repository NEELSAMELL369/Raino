import app from "./App.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 8080;

const runServer = async () => {
  try {
    await connectDB(); // connect to DB before starting
    app.listen(PORT, () => {
      console.log(`✅ Server is running on Port: ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to run server:", error.message);
    process.exit(1);
  }
};

runServer();
