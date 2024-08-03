const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const HOST = '94.237.84.98';
const PORT = 80;

app.use(bodyParser.urlencoded({ extended