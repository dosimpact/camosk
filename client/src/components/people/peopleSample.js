export default async (filename) => {
    const sample = process.env.PUBLIC_URL + "/sample/"

    const image = document.createElement("img")
    image.src = sample + filename

    let imageString = ""
    let loadEvent = null
    await (function(){
        return new Promise((res, _) => {
            loadEvent = image.addEventListener("load", function(){
                const canvas = document.createElement("canvas")
                const context = canvas.getContext("2d")
                context.drawImage(image, image.width, image.height)
                imageString = canvas.toDataURL()
                canvas.remove()
                res()
            })
        })
    })()
    image.removeEventListener("load", loadEvent)
    image.remove()

    const buf = Buffer.from(imageString.replace("data:image/png;base64,", ""), "base64")
    return buf
}