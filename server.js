const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const cityList = require('./data/list.json')

const getMatchingCities = str => {
    const regEx = new RegExp(str, 'gi')
    let citySet = new Set()
    if (str.length > 2) {
        cityList.forEach(city => {
            if (city.name.match(regEx)) {
                citySet.add(city.name)
            }
        })
        const cities = Array.from(citySet)
        return { cities }
    }
    return {}
}

express()
    .use(express.static(path.join(__dirname, 'public')))
    //.get('/', (req, res) => res.render('public/index'))
    .get('/getCities', (req, res) => {
        res.send(JSON.stringify(getMatchingCities(req.query.name)))
    })
    .listen(PORT, () => console.log(`Listening on ${PORT}`))
