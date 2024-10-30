// lib/mongodb.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME;  // Define DB name in environment variables
const options = {};

let client;
let db;
let clientPromise;

if (!process.env.MONGODB_URI || !process.env.MONGODB_DB_NAME) {
  throw new Error("Please add your Mongo URI and DB Name to .env.local");
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    clientPromise = client.connect().then((client) => {
      db = client.db(dbName);
      return db;  // Return the database directly
    });
    global._mongoClientPromise = clientPromise;
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect().then((client) => {
    db = client.db(dbName);
    return db;  // Return the database directly
  });
}

export default clientPromise;
