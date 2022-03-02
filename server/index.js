const express = require('express');
const multer  = require('multer');
const env = require('dotenv').config();
const fs = require('fs');
const { google } = require('googleapis');

const { getAuthToken, getSpreadSheetValues } = require('./googleSheetsServices.js');

const app = express();
const upload = multer({ dest: 'uploads/' });

const port = 3000;

app.use(express.static('./client/dist'));
app.use(express.json());

// Test endpoint to write values to a google sheets spreadsheet
const spreadsheetId = '1pHttYLspcJt1GBWLR0oU3FeWRu8V5V_SdR4kJsNpRZY'
const sheetName = 'Sheet1'
app.post('/test', async(req, res) => {
  try {
    const auth = await getAuthToken();
    const response = await getSpreadSheetValues({
      spreadsheetId,
      sheetName,
      auth
    })
    res.status(200).send(JSON.stringify(response.data, null, 2));
  } catch(error) {
    res.status(400).send(error.message, error.stack);
  }
});

app.listen(port, () => {
  console.log(`Bruin Consulting Website listening at http://localhost:${port}`)
});``