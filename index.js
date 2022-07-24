const request = require('request')
const csv = require('csvtojson')
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

const url =
	'https://docs.google.com/spreadsheets/d/1kh5UVEvOBeaCuRURj9koU9wsg1T26WqXJxiU9kAE1qk/export?format=csv&id=1kh5UVEvOBeaCuRURj9koU9wsg1T26WqXJxiU9kAE1qk&gid=0'

app.get('/', (req, res) => {
	res.send('Stalam API')
})

app.get('/api/lands', (req, res) => {
	csv()
		.fromStream(request.get(url))
		.then((jsonObj) => {
			res.json(jsonObj)
		})
})

app.listen(8080)

module.exports = app

// https://docs.google.com/spreadsheets/d/1kh5UVEvOBeaCuRURj9koU9wsg1T26WqXJxiU9kAE1qk/export?format=csv&id=1kh5UVEvOBeaCuRURj9koU9wsg1T26WqXJxiU9kAE1qk&gid=0
