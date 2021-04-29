const logger = require('../config/logger');
const spreadsheetWriter = require('../data/spreadsheet-writer');
const Student = require('../model/student-model');

class StudentService {
  static formatStudentList(students) {
    logger.info('- Init a list of students objects');
    const studentsList = [];
    // eslint-disable-next-line array-callback-return
    students.map((student, index) => {
      // Create a student object, passing faults, p1, p2, p3, index.
      const studentObject = new Student(student[2], student[3], student[4], student[5], index);
      logger.info(`-- Create a student object, [Situation: ${studentObject.situation}, Naf: ${studentObject.naf}]`);
      studentsList.push(studentObject);
    });
    logger.info('- Ending a list of students objects');
    return studentsList;
  }

  static parseToSpreadsheet(students) {
    logger.info('- Passing the list of students to the spreadsheet.');
    students.forEach((student) => {
      // the parameters situation and naf are required data, to write in the spreadsheet,
      // this index paramaeter is used to find where the required data will be written.
      spreadsheetWriter(student.situation, student.naf, student.index);
    });
  }
}

module.exports = StudentService;
