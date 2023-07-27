const database = require('../config/databaseConnectionHandler.js')
const client = database.client;
const herbiumDb = client.db('herbium')
const herbsCollection = herbiumDb.collection('herbs')

const generateHerbDocument = (name, origin, benefits, uses, sources) => {
    return  {
        name: name, 
        origin: origin,
        benefits: benefits,
        uses: uses,
        sources: sources
    }
    
}

const addHerb = async (properties) => {
  
    client.connect()
      .then(_ => herbsCollection.insertOne(properties))
      .then(result => console.log(`Document inserted with the _id ${result.insertedId}`))
      .catch(error => console.error(error))
      .finally(client.close())

      const addHerb = async properties => {
        await client.connect();
        const result = await herbsCollection.insertOne(properties)
          .catch(console.error)
        if (!result)
          return
        console.log(`Document inserted with the _id ${result.insertedId}`)
        client.close()
    }
  
}

const findHerbByKeyValue = async (key, pattern) => {


  try {
    await client.connect();
   
    const regex = new RegExp(`(?:.+)?${pattern}(?:.+)?`, 'gmi')
    const query = {}
    query[key] = {$regex: regex}
    const result = await herbsCollection.find(query).toArray()
    console.log(result)
    return result
    
  } finally {
    await client.close();

  }


}


module.exports = {
  generateHerbDocument,
  addHerb,
  findHerbByKeyValue,

};