const path = require('path')
const fs = require('fs')

const uploadFile = async (req, res) => {
    if (req.body.error) return res.status(400).json({ error: req.body.error });
    res.status(200).json({ nombre: req.body.nombre, extension: req.body.extension });
}

const obtenerImagen = async (req, res) => {
    try {
        const { nombre } = req.params;
        const pathArchivo = path.join(__dirname, `../uploads`, path.basename(nombre));
        if (!pathArchivo.includes('uploads')) {
            throw new Error('No se permiten subdirectorios');
        }
        if (!fs.existsSync(pathArchivo)) {
            throw new Error('No existe el archivo');
        }
        res.sendFile(pathArchivo);
    } catch (error) {
        res.sendStatus(404);
    }
}

module.exports = { uploadFile, obtenerImagen };
