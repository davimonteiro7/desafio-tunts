/* Access the spreadshet: Engenharia de Software - Desafio Davi Monteiro
    https://docs.google.com/spreadsheets/d/1Uy_tyv4KzwvKMgGgwP9z70FovgS1rQYjMEP07guxxAc/edit?usp=sharing
    Id: 1Uy_tyv4KzwvKMgGgwP9z70FovgS1rQYjMEP07guxxAc
  reference:
    https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get
*/

const logger = require('../config/logger');
const { auth, google } = require('./spreadsheet-auth');

function runSpreadsheetEditor() {
  const sheets = google.sheets({ version: 'v4', auth });
  // Use sheets API, to get the data over a certain range, in a specific spreadsheetId.
  logger.info('- Access the spreadsheet with ID = 1Uy_tyv4KzwvKMgGgwP9z70FovgS1rQYjMEP07guxxAc');

  return new Promise((resolve, reject) => {
    sheets.spreadsheets.values.get({
      spreadsheetId: '1Uy_tyv4KzwvKMgGgwP9z70FovgS1rQYjMEP07guxxAc',
      range: '!A4:H',
    }, (error, response) => {
      const rows = response.data.values;
      resolve(rows);
      // eslint-disable-next-line prefer-promise-reject-errors
      reject(`Failed to read the spreashed: ${error}`);
    });
  });
}

module.exports = runSpreadsheetEditor;
