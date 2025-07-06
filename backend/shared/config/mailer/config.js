const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport(
    {
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: 'bret.bartoletti52@ethereal.email',
            pass: 'XBbnthvHxHWrC3vhTj'
        }
    }
)

module.exports = transporter