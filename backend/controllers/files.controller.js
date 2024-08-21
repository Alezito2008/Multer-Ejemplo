const fs = require('fs/promises');
const path = require('path');
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const uploadFile = async (req, res) => {
    // console.log(req.files['fotito'][0])
    res.sendStatus(204)
}

module.exports = { uploadFile };
