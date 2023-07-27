const herbsRepository = require('../../models/repository/herbsRepository.js')

const searchHerbByName = async (herbName) => {
    let queryResponse = await herbsRepository.findHerbByKeyValue("name", herbName)
    throw new Error('This is a runtime error');
    return queryResponse

}



module.exports = {
    searchHerbByName
}