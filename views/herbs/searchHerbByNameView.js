const searchHerbByNameController = require('../../controllers/herbs/searchHerbByNameController')

const searchHerbByName = async (req, res) => {
    const herbName = req.query.name

    searchHerbByNameController.searchHerbByName(herbName)
    .then(result => res.send(JSON.stringify(result)))
    .catch(err => {
        console.dir(err)
    })
     
}

module.exports = {
    searchHerbByName
}