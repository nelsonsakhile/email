const sendEmail = require("../utils/sendEmails");

require("dotenv").config();

exports.sendEmail = async (req, res) => {
    try {
        const { userFirstName, userLastName, userEmail, userNumber, date } =
            req.body;

        if (!userEmail) {
            return res.status(400).json({ message: "Email is required." });
        }

        const options = {
            to: "royalhealthmail@gmail.com",
            subject: "Appointment request",
            message: {
                username: userFirstName,
                usersurname: userLastName,
                useremail: userEmail,
                usernumber: userNumber,
                appdate: date.toString()
            }
        };

        await sendEmail(options);

        res.status(200).json({
            message: "Check your mail!"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};
