const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 80;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).send('All fields are required.');
    }
    const contactInfo = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\n`;
    fs.appendFile('contacts.txt', contactInfo, (err) => {
        if (err) {
            console.error('Failed to save contact info:', err);
            return res.status(500).send('Internal Server Error');
        }
        res.send('Contact information saved successfully.');
    });
});

app.listen(PORT, '94.237.84.98', () => {
    console.log(`Server running on http://94.237.84.98:${PORT}`);
});