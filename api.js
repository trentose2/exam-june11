const express = require('express')
var bodyParser = require('body-parser')
const fetch = require("node-fetch")

const app = express()
app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({ extended: true }));


const PORT = process.env.PORT || 3000


app.get('/', (req, res) => {
    res.json({status: 'running'})
})

app.get('/get_string', function(req, res) {
    there is some error here
});




app.listen(PORT, () => console.log('Example app listening on port'+ PORT))


