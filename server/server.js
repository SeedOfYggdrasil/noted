// Server.js

// Dependencies
const express = require("express");
const cors = require("cors");
const path = require("path");
const { MongoClient, ServerApiVersion } = require("mongodb");

require("dotenv");

// ES MODULE
// import apiRoutes from "./routes/apiRoutes.js";
// import authRoutes from "./routes/auth.js";
// app.use("/api/", apiRoutes);
// app.use("/auth/", authRoutes);
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// Express
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database
const mongoUri = process.env.MONGO_URI;
const uri = mongoUri;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Connected to database!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

// Serve Client
app.use(express.static(path.join(__dirname, "../client/dist")));
const indexPath = path.join(__dirname, "../client/dist/index.html");
app.get("*", (req, res) => {
  res.sendFile(indexPath);
});

// Start Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
