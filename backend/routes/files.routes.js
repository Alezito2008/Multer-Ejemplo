const { Router } = require('express')
const { uploadFile, obtenerImagen } = require('../controllers/files.controller')
const multer = require('multer')

const router = Router()

const formatos = ['png', 'jpg', 'jpeg', 'webp']

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
        try {
            let nombre = file.originalname.split('.')[0]
            let extension = file.originalname.split('.').pop()
            req.body.nombre = nombre
            req.body.extension = extension
            cb(null, nombre + Math.floor(Math.random() * 1000) + '.' + extension)
        } catch (error) {
            console.log(error)
        }
    }
})

const fileFilter = (req, file, cb) => {
    let extension = file.originalname.split('.').pop()
    if (!formatos.includes(extension)) {
        req.body.error = 'Formato no permitido'
        return cb(null, false, new Error('Formato no permitido'))
    }
    cb(null, true)
}

const upload = multer({ storage, fileFilter })

router.post('/upload', upload.single('archivo'), uploadFile)

router.get('/imagenes/:nombre', obtenerImagen)

module.exports = router
