let datos = null
const subir = async function() {
    const foto = document.getElementById('foto')
    const file = foto.files[0]

    const formData = new FormData()
    formData.append('archivo', file)

    const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData
    })

    datos = await response.json()
    console.log(datos)
}