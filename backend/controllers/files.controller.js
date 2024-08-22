const uploadFile = async (req, res) => {
    if (req.body.error) return res.status(400).json({ error: req.body.error });
    res.status(200).json({ nombre: req.body.nombre, extension: req.body.extension });
}

module.exports = { uploadFile };
