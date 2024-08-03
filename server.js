const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const HOST = '94.237.84.98';
const PORT = 80;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// Endpoint to save contact information
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

// Start the server
app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});