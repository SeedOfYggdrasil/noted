// server.js

// Packages
require("dotenv");
const express = require("express");
const cors = require("cors");
const path = require("path");
const { MongoClient, ServerApiVersion } = require("mongodb");

// Load Express
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database
const mongoUri = process.env.MONGO_URI;
const uri = mongoUri;
const dbClient = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await dbClient.connect();
    await dbClient.db("admin").command({ ping: 1 });
    console.log("Connected to database!");
  } finally {
    uhic;
    await dbClient.close();
  }
}
run().catch(console.dir);

// Serve Client
app.use(express.static(path.join(__dirname, "..", "client", "dist")));
const indexPath = path.join(__dirname, "../client/dist/index.html");

app.get("*", (req, res) => {
  res.sendFile(indexPath);
});

// Start Server
const HOST = process.env.HOST || localhost;
const PORT = process.env.PORT || 3001;
app.listen(PORT, "0,0,0,0", () => {
  console.log(`http://${HOST}:${PORT}`);
});
