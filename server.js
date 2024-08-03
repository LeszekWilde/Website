const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 80;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to handle contact form submissions
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Check if all fields are filled
    if (!name || !email || !message) {
        return res.status(400).send('All fields are required.');
    }

    // Format the contact information
    const contactInfo = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\n`;

    // Append the contact information to contacts.txt
    fs.appendFile('contacts.txt', contactInfo, (err) => {
        if (err) {
            console.error('Failed to save contact info:', err);
            return res.status(500).send('Internal Server Error');
        }
        res.send('Contact information saved successfully.');
    });
});

// Start the server
app.listen(PORT, '94.237.84.98', () => {
    console.log(`Server running on http://94.237.84.98:${PORT}`);
});