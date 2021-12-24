const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

/* GET home page. */
router.get("/", (req, res) => {
    res.render("index", { title: "Express" });
});

router.post("/email", (req, res) => {
    console.log(req.body.name);
    let mailOptions = {
        from: req.body.email,
        to: "tim@timb.codes",
        subject: `Client Email: ${req.body.subject}`,
        text: `Name: ${req.body.name}; Subject: ${req.body.subject}; Email: ${req.body.email} Message: ${req.body.message}`,
    };
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "timbcodes@gmail.com",
            pass: "$mokeyJoe86",
        },
    });
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log(`Email sent: ${info.response}`);
        }
    });
    setTimeout(() => {
        res.redirect("/");
    }, 2000);
});

module.exports = router;