const express = require('express')
const axios = require("axios");
const path = require("path")
const app = express()
const port = 3000


app.get('/', (req, res) => {
    console.log(path.join(__dirname, 'public'))
    return res.sendFile("public/index.html", { root: __dirname })
})

app.get('/searchaqi', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality',
        params: { city: req.query.entry },
        headers: {
            'X-RapidAPI-Key': 'b8eb4c64d1msh82f4f5538e5065ap1d2b92jsn7113e96b5efb',
            'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        res.json(response.data)
    }).catch(function (error) {
        console.error(error);
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port} - http://localhost:3000/ `)
})