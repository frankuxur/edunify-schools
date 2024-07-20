const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

app.use(express.json())
app.use(cors())
app.use(express.static('schoolImages'))

const db = require('./models')

// routers
const schoolRouter = require('./routes/Schools')
app.use('/schools', schoolRouter)

const port = process.env.PORT || 3001

db.sequelize.sync().then(() => {
    app.listen(port, "0.0.0.0", () => {
        console.log(`server running on port ${port}`)
    })
})