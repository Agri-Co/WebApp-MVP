import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const Uri = String(process.env.MONGODB_URI);

class Db {
  constructor() {
    this._mongodb = new MongoClient(Uri);
  }

  private async checkCollectionExists(collection: string) {
    return await this._mongodb
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

  public async createCollection(collection: string) {
    this.checkCollectionExists(collection).then((response) => {
      if (response == false)
        this._mongodb.db("Users").createCollection(collection);
      else console.log("Collection in Users already exists");
    });
  }

  public async registerUsertoDB(username: string, password: string) {
    const doc = { name: username, password: password };
    const collection = this._mongodb.db("Users").collection("Accounts");
    const result = await collection.insertOne(doc);
    if (result.acknowledged) {
      console.log("User has been added to the database");
      return true;
    } else return false;
  }

  public async run() {
    try {
      await this._mongodb.connect();
      console.log("Connected to mongodb.");
    } catch (error) {
      console.log(error);
    }
  }

  private readonly _mongodb: MongoClient;
}

export default Db;
