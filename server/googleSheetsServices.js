// Based on the following guide: https://codingfundas.com/how-to-read-edit-google-sheets-using-node-js/index.html
const { google } = require('googleapis');
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const sheets = google.sheets('v4');

const getAuthToken = async () => {
  const auth = new google.auth.GoogleAuth({
    scopes: SCOPES
  })
  const authToken = await auth.getClient();
  return authToken;
}

const getSpreadSheetValues = async ({spreadsheetId, auth, sheetName}) => {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    auth,
    range: sheetName
  });
  return res;
}

module.exports = {
  getAuthToken,
  getSpreadSheetValues
}