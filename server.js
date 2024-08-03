const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

app.post('/save-contact', (req, res) => {
    const { name, email, message } = req.body;
    const contactInfo = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\n`;
    
    fs.appendFile('contacts.txt', contactInfo, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.send('Contact information saved successfully!');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});