// import a function, to write directly to the spreadsheet.
const spreadsheetWriter = require('../data/spreadsheet-writer')

function parseStudentData(students){
  students.forEach(student => {
    // the parameters situation and naf are required data, to write in the spreadsheet,
    // this index paramaeter is used to find where the required data will be written. 
    spreadsheetWriter(student.situation, student.naf, student.index)
  });
}

module.exports = {
  parseStudentData
}