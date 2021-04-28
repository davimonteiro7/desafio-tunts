/* Access the spreadshet: Engenharia de Software - Desafio Davi Monteiro 
    https://docs.google.com/spreadsheets/d/1Uy_tyv4KzwvKMgGgwP9z70FovgS1rQYjMEP07guxxAc/edit?usp=sharing
    Id: 1Uy_tyv4KzwvKMgGgwP9z70FovgS1rQYjMEP07guxxAc
  reference: 
    https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get
*/

const {auth, google} = require('./spreadsheet-auth');
//import a student model, to organize the required student data.
const Student = require('../model/student-model')
// import a service function, to pass a list os student objects.  
const {parseStudentData} = require('../services/studentService');

// access a given spreadsheet, and write the required data to it. 
async function runSpreadsheetEditor(){
  const sheets = google.sheets({version: 'v4', auth});  
  // Use sheets API, to get the data over a certain range, in a specific spreadsheetId.
  await sheets.spreadsheets.values.get({
    spreadsheetId: "1Uy_tyv4KzwvKMgGgwP9z70FovgS1rQYjMEP07guxxAc",
    range: '!A4:H'
  
  }, (error, response) => {
    // within the scope of this callback function, read and parse the student data. 
    
    if (error) console.log('this API returned an error: ' + error);
    
    // get all values, in rows data on the spreadsheet.
    const rows = response.data.values;
    
    if (rows.length){          
      // format the rows in a list of objects with the required data [media, situation, naf]
      const studentsList = formatStudentData(rows);
      // move to a service responsible for writing the data on the spreadsheet.
      parseStudentData(studentsList);
    }
  });  
}

// format the data in a given set of rows, and extract the required data. 
function formatStudentData(rows){
  
  const studentsList = [];
  rows.map((row, index) => {
    // Create a student object, passing faults, p1, p2, p3, index.
    const student = new Student(row[2],row[3], row[4], row[5], index)
    studentsList.push(student);
  });

  return studentsList; 
}

module.exports = runSpreadsheetEditor;