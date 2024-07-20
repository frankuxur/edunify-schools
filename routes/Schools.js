const express = require('express')
const router = express.Router()
const { schools } = require('../models')
const multer = require('multer')
const path = require('path')

router.get('/', async (req, res) => {
    const schoolsList = await schools.findAll()
    res.json(schoolsList)
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'schoolImages/')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})

router.post('/', upload.single('image'), async (req, res) => {
    
    const parsedData = {
        ...JSON.parse(req.body.info)
    }
    const contact = +parsedData.contact
    const email_id = parsedData.email_id.toLowerCase()
    const school = {
        ...parsedData,
        contact,
        email_id,
        image: req.file.filename
    }
    
    await schools.create(school) 
    res.json(school)
})

module.exports = router