const nodeMailer = require("nodemailer");

const sendEmail = async options => {
    const transporter = nodeMailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
            user: "nelsonjared050@gmail.com",
            pass: "fhza kfgg dwgh tmun"
        }
    });

    const mailOptions = {
        from: "nelsonjared050@gmail.com",
        to: options.to,
        subject: options.subject,
        text: `
               Names: ${options.message.username} \n 
               Surname: ${options.message.usersurname} \n 
               Email: ${options.message.useremail} \n 
               Phone Number: ${options.message.usernumber} \n 
               Date: ${options.message.appdate}`
    };

    await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
