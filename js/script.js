inputImage.onchange = evt => {
    const [file] = inputImage.files
    if (file) {
        potatoImage.src = URL.createObjectURL(file)
    }
}