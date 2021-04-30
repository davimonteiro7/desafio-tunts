const logger = require('../config/logger');
const { auth, google } = require('./spreadsheet-auth');

/**
 * Open a context that allows reading and writing in a spreadsheet.
 * @returns {Promise} A Promise to access data over a certain range, in a specific spreadsheetId.
 */
function runSpreadsheetEditor() {
  const sheets = google.sheets({ version: 'v4', auth });
  // Use sheets API, to get
  logger.info('- Access the spreadsheet with ID = 1Uy_tyv4KzwvKMgGgwP9z70FovgS1rQYjMEP07guxxAc');

  return new Promise((resolve, reject) => {
    sheets.spreadsheets.values.get({
      spreadsheetId: '1Uy_tyv4KzwvKMgGgwP9z70FovgS1rQYjMEP07guxxAc',
      range: '!A4:H',
    }, (error, response) => {
      const rows = response.data.values;
      resolve(rows);
      // eslint-disable-next-line prefer-promise-reject-errors
      reject(`Failed to read the spreadsheet - ${error}`);
    });
  });
}

module.exports = runSpreadsheetEditor;
