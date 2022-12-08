import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const Uri = String(process.env.MONGODB_URI);

const client = new MongoClient(Uri);

async function checkCollectionExists(collection: string) {
  return await client
    .db("Users")
    .listCollections()
    .toArray()
    .then((response) => {
      for (const collections of response) {
        if (collections.name == collection) return true;
      }
    })
    .catch(() => {
      "Users database doesn't exist";
      return false;
    });
}

async function createCollection(collection: string) {
  checkCollectionExists(collection).then((response) => {
    if (response == false) client.db("Users").createCollection(collection);
    else console.log("Collection in Users already exists");
  });
}

async function addUsertoDB(username: string, password: string) {
  const doc = { name: username, password: password };
  const collection = client.db("Users").collection("Accounts");
  const result = await collection.insertOne(doc);
  if (result.acknowledged) {
    console.log("User has been added to the database");
    return true;
  } else return false;
}

async function run() {
  try {
    await client.connect();
    // createCollection("Accounts");
    // addUsertoDB("Vicky", "123");
    console.log("Connection to the database !");
  } finally {
    // await client.close();
  }
}

export default run;
