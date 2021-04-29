const runSpreadsheetEditor = require('./data/spreadsheet-editor');
const StudentService = require('./services/student-service');
const logger = require('./config/logger');

logger.info('Init Spreadsheet editor.');

runSpreadsheetEditor()
  .then((students) => {
    logger.info('Read all students data.');
    // get a list of new student objects with [naf] and [situation] attributes.
    const studentsList = StudentService.formatStudentList(students);

    StudentService.parseToSpreadsheet(studentsList);
    logger.info('Ending Spreadsheet editor.');
  });
