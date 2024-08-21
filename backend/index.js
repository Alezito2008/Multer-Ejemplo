const app = require("./app")

const PORT = 5000

async function main() {
    try {
        app.listen(PORT)
        console.log(`Escuchando en el puerto ${PORT}`)
    } catch (err) {
        console.error('Error: ' + err)
    }
}

main()
