
import Contact from "../models/contact.js";
import nodemailer from "nodemailer";


export const sendMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // ✅ Save to DB
        await Contact.create({
            name,
            email,
            message,
            user: req.user._id   // 🔥 IMPORTANT
        });
        try {
            // ✅ Email setup
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: "yourgmail@gmail.com",
                    pass: "your_app_password"
                }
            });

            await transporter.sendMail({
                from: `"${name}" <${email}>`,
                to: "yourgmail@gmail.com",
                subject: "New Contact Message 📩",
                text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
            });

        } catch (emailError) {
            console.log("Email failed ❌", emailError.message);
        }

        // ✅ ALWAYS SUCCESS
        res.json({ message: "Message sent successfully 🎉" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed ❌" });
    }
};

export const getMessages = async (req, res) => {
    try {
        const messages = await Contact.find({ user: req.user._id })
            .sort({ createdAt: -1 });
        res.json(messages);
    } catch (error) {
        res.status(500).json({ message: "Error fetching messages ❌" });
    }
};

