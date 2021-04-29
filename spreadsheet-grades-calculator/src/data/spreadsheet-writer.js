const logger = require('../config/logger');
const { auth, google } = require('./spreadsheet-auth');

// writes the required data(situation and naf) in a specific cell of the spreadsheet.
function spreadsheetWriter(situation, naf, index) {
  const sheets = google.sheets({ version: 'v4', auth });
  logger.info('-- Writing each student [situation, naf] in the spreadsheet.');
  sheets.spreadsheets.values.update({
    spreadsheetId: '1Uy_tyv4KzwvKMgGgwP9z70FovgS1rQYjMEP07guxxAc',
    range: `G${index + 4}`,
    valueInputOption: 'USER_ENTERED',
    resource: {
      values: [[situation, naf]],
    },
  });
}

module.exports = spreadsheetWriter;
