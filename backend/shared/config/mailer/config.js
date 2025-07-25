const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport(
    {
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: process.env.NODEMAILER_SENDER_USER,
            pass: process.env.NODEMAILER_SENDER_PASSWORD
        }
    }
)

const sendEmail = async (mailReceiver, mailSubject, mailBody) => {
    try {
        const mail = await transporter.sendMail(
            {
                from: `"${process.env.NODEMAILER_SENDER_NAME}" <${process.env.NODEMAILER_SENDER_USER}>`,
                to: mailReceiver,
                subject: mailSubject,
                html: mailBody
            }
        )

        console.log(`Mail sent to: ${mail.accepted}`)
        console.log(`Preview URL: ${nodemailer.getTestMessageUrl(mail)}`)

    } catch (err) {
        console.error(`Error while sending mail: ${err}`)
    }
}

module.exports = sendEmail