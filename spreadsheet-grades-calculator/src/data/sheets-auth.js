const {google} = require('googleapis');

/* Authenticate to use the Google Sheets API 
by passing the keynote.json file generated through 
a service account [https://support.google.com/a/answer/7378726?hl=en].
*/
const auth = new google.auth.GoogleAuth({
  keyFile: '../spreadsheet-grades-calculator/src/config/keyfile.json',
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

module.exports = {auth, google};