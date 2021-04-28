const {google} = require('googleapis');

/* Authenticate to use the Google Sheets API with 
a temporary service account [https://support.google.com/a/answer/7378726?hl=en] 
by passing the generated keynote.json. 
*/

// this service-account will be deleted at the end of this challenger.
const auth = new google.auth.GoogleAuth({
  keyFile: '../spreadsheet-grades-calculator/src/config/keyfile.json',
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

module.exports = {auth, google};