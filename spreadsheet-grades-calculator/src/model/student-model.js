/* eslint-disable class-methods-use-this */
const logger = require('../config/logger');
/** Class representing a Student. */
class Student {
  /** Create student object. Setting situation and naf as object properties */
  constructor(faults, p1, p2, p3, index) {
    this.average = this.getAverage(p1, p2, p3);
    logger.info('--- Get the average grade.');
    this.situation = this.getSituation(faults, this.average);
    logger.info('--- Get student situation.');
    this.naf = this.getNaf(this.average, faults);
    logger.info('--- Get Naf(Nota para Aprovação final).');
    this.index = index;
  }

  /**
   * Calculate the average grade.
   * @param {number} p1 - First test grade
   * @param {number} p2 - Second test grade
   * @param {number} p3 - Third test grade
   * @returns {number} Average grade
   * @function
   */
  getAverage(p1, p2, p3) {
    // convet of 0 to 100 range, for  0 to 10 range, before calculate the average grade.
    const average = (parseFloat(p1) / 10.0 + parseFloat(p2) / 10.0 + parseFloat(p3) / 10.0) / 3.0;
    return average;
  }

  /**
   * Return the student situation based on number of faults and the average grade.
   * @param {*} faults - the number of student faults.
   * @param {*} average - Average grade
   * @returns Student situation [Reprovado por Falta, Reprovado por Nota, Exame Final]
   * @function
  */
  getSituation(faults, average) {
    // student cannot miss 25% of lessons. 15 lessons of 60.
    if (faults > 15) return 'Reprovado por Falta';
    if (average < 5.0) return 'Reprovado por Nota';
    if (average >= 5.0 && average < 7.0) return 'Exame Final';
    return 'Aprovado';
  }

  /**
   * Caculete naf(Nota para Aprovação Final) minimum grade to pass the final exam
   * @param {number} average - Average grade
   * @param {number} faults - Student faults. Students reproved by faults return naf = 0
   * @returns naf(Nota para Aprovação Final)
   * @function
   */
  getNaf(average, faults) {
    if (average >= 5.0 && average < 7.0 && faults <= 15) {
      return Math.round(10.0 - average);
    }

    return 0;
  }
}

module.exports = Student;
