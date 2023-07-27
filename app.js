const express = require('express')
const bodyParser = require('body-parser');
const herbRoutes = require('./main/routes/herbsRoutes.js');
const shroomsRoutes = require('./main/routes/shroomsRoutes.js');
const app = express()
const port =  3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/herbs', herbRoutes)
app.use('/shrooms', shroomsRoutes)

app.listen(port, () => {
    console.log("Listening on port 3000")
})

module.exports = {
    app
}

