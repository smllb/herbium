const herbsRepository = require('../../models/repository/herbsRepository.js')

const retrieveHerbsByBenefits = async (req, res) => {
    herbsRepository.findHerbByKeyValue("benefits", req.query.name).then(result => res.send(JSON.stringify(result)))
}

module.exports = {
    retrieveHerbsByBenefits
}