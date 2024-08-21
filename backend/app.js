const express = require('express')
const cors = require('cors')
const fileRoutes = require('./routes/files.routes')

const app = express()

app.use(cors({ origin: true, credentials: true }))
app.use(express.json())
app.use(fileRoutes)

module.exports = app
