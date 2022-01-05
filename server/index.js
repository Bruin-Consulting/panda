const express = require('express');
const multer  = require('multer');
const env = require('dotenv').config();
const { google } = require('googleapis');
const { getAuthToken, getSpreadSheet } = require('./utils.js');

const app = express();
const upload = multer({ dest: 'uploads/' });

const port = 3000;

app.use(express.static('./client/dist'));

app.use('/test', upload.fields([
    { name: 'resume', maxCount: 1 },
    { name: 'resume-blank', maxCount: 1 }
]));

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.get('/try', async (req, res) => {
  const spreadsheetId = '1-oFodKOdX_6Budn9V6o7getS695Od4bcIHUnQasLzm4';
  let client = await getAuthToken();
  console.log(client);
  let spreadsheet = await getSpreadSheet({ spreadsheetId, token });
  res.send(token);
});

app.post('/test', (req, res) => {
  console.log(req.body);
  console.log(req.files);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Bruin Consulting Website listening at http://localhost:${port}`)
});``