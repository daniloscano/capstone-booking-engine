const multer = require('multer')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')

cloudinary.config(
    {
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SCRET
    }
)

const roomsStorage = (fileName = 'image') => {
    return new CloudinaryStorage(
        {
            cloudinary: cloudinary,
            params: (req, file) => {
                const imageName = fileName.toLowerCase().split(' ').join('-')
                const filePath = `rooms/${imageName}`
                file.originalname = imageName + '.jpg'

                return {
                    folder: filePath,
                    format: 'jpg',
                    use_filename: true,
                    unique_filename: true
                }
            }
        }
    )
}

const roomsUpload = (fileName) => {
    const storage = roomsStorage(fileName)
    return multer({ storage })
}

const iconsStorage = () => {
    return new CloudinaryStorage(
        {
            cloudinary: cloudinary,
            params: (req, file) => {

                return {
                    folder: 'icons',
                    format: 'png',
                    use_filename: true,
                    unique_filename: true
                }
            }
        }
    )
}

const iconsUpload = () => {
    const storage = iconsStorage()
    return multer({ storage })
}

module.exports = {
    roomsUpload,
    iconsUpload
}