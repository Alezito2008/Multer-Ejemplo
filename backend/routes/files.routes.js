const { Router } = require('express')
const { uploadFile } = require('../controllers/files.controller')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
        try {
            let fileName = file.originalname.split('.')[0]
            cb(null, fileName + Math.floor(Math.random() * 1000) + '.png')
        } catch (error) {
            cb(null, file.originalname + Math.floor(Math.random() * 1000))
        }
    }
})

const upload = multer({ storage })

const router = Router()

router.post('/upload', upload.single('fotito'), uploadFile)

module.exports = router
