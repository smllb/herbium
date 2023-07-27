const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://ttm:ttm@rekt.9yyt77x.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});




const connect = async () => {
  try {
    await client.connect();
   
    await client.db("admin").command({ ping: 1 });
    console.log("Successfully connected to MongoDB!");
    
  } finally {
    await client.close();

  }
}

module.exports = {
    client
}