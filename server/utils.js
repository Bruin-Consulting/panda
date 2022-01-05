const { google } = require('googleapis');
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const sheets = google.sheets('v4');

const getAuthToken = async () => {
  const auth = new google.auth.GoogleAuth({
    scopes: SCOPES
  })
  let client = await auth.getClient();
  return client;
}

const getSpreadSheet = async ({spreadsheetId, auth}) => {
  const res = await sheets.spreadsheets.get({
    spreadsheetId,
    auth,
  });
  return res;
}

module.exports = {
  getAuthToken,
  getSpreadSheet
}