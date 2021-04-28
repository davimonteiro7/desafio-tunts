/* reader of the spreadshet: 
  https://docs.google.com/spreadsheets/d/1Uy_tyv4KzwvKMgGgwP9z70FovgS1rQYjMEP07guxxAc/edit?usp=sharing
Id: 1Uy_tyv4KzwvKMgGgwP9z70FovgS1rQYjMEP07guxxAc
reference: https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get
*/

const {auth, google} = require('./sheets-auth');

// read the required data on the spreadshet, passing the authenticator and return a list of objects required
async function getAllStudentGrades(auth){
  const sheets = google.sheets({version: 'v4', auth});  

  //return a  list of all students grades in a specific spreadsheet.
  sheets.spreadsheets.values.get({
    spreadsheetId: "1Uy_tyv4KzwvKMgGgwP9z70FovgS1rQYjMEP07guxxAc",
    range: '!A4:H'
  
  }, (error, response) => {
    if (error) console.log('this API returned an error: ' + error);
    // get all rows data on the spreadsheet.
    const rows = response.data.values;
    //format the rows in a list of objects with the required data [p1, p2, p3, falts, name, index]
    if (rows.length){          
      console.log(studentsDataList(rows));
      
    }
  });  
}
function studentsDataList(rows){
  const studentObjList = [];
  rows.map((row, index) => {
    const student = {
      name: row[1],
      falts: row[2],
      p1: row[3],
      p2: row[4],
      p3: row[5],
      index: index
    }
    studentObjList.push(student);
  });
  return studentObjList; 
}
getAllStudentGrades(auth); 
