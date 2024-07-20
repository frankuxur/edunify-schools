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

db.sequelize.sync().then(() => {
    app.listen(process.env.PORT || 3001, () => {
        console.log('server running on port 3001')
    })
})