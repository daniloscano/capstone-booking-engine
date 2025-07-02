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

const roomsStorage = (imageName = '') => {
    return new CloudinaryStorage(
        {
            cloudinary: cloudinary,
            params: (req, file) => {
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

const roomsUpload = (imageName) => {
    const storage = roomsStorage(imageName)
    return multer({ storage })
}

const iconsStorage = (imageName) => {
    return new CloudinaryStorage(
        {
            cloudinary: cloudinary,
            params: (req, file) => {

                return {
                    folder: 'icons',
                    format: 'png',
                    public_id: imageName
                }
            }
        }
    )
}

const iconsUpload = (imageName) => {
    const storage = iconsStorage(imageName)
    return multer({ storage })
}

module.exports = {
    roomsUpload,
    iconsUpload
}