const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth'); // Create this later
const app = express();

// Middleware to parse JSON requests and cors
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/your-database', {
  // useNewUrlParser: true,
  // useUnifiedTopology: true
});

// Auth routes
app.use('/auth', authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// const { MongoClient } = require("mongodb");

// // MongoDB connection URI
// const uri = "mongodb://127.0.0.1:27017";


// // Database and Collection Names
// const dbName = "todoDB";
// const collectionName = "todos";

// // Static value to insert
// const todoItem = {
//   title: "Static To-Do Title",
//   description: "This is a static to-do item.",
//   status: "pending", // Additional fields
//   createdAt: new Date()
// };

// // Function to insert the static value
// async function addTodo() {
//   const client = new MongoClient(uri);

//   try {
//     // Connect to the MongoDB server
//     await client.connect();
//     console.log("Connected to MongoDB");

//     // Get the database and collection
//     const database = client.db(dbName);
//     const collection = database.collection(collectionName);

//     // Insert the static to-do item
//     const result = await collection.insertOne(todoItem);
//     console.log("To-Do item inserted:", result.insertedId);
//   } catch (err) {
//     console.error("Error inserting to-do item:", err);
//   } finally {
//     // Close the connection
//     await client.close();
//   }
// }

// // Run the function
// addTodo();
