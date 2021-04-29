/* eslint-disable class-methods-use-this */
const logger = require('../config/logger');

// get the student data. Generate situation and naf, as object properties.
class Student {
  constructor(faults, p1, p2, p3, index) {
    this.average = this.getAverage(p1, p2, p3);
    logger.info('--- Get Average.');
    this.situation = this.getSituation(faults, this.average);
    logger.info('--- Get Situation.');
    this.naf = this.getNaf(this.average, faults);
    logger.info('--- Get Naf(Nota para Aprovação final).');
    this.index = index;
  }

  getAverage(p1, p2, p3) {
    // convet of 0 to 100 range, for  0 to 10 range, before calculate the average grade.
    const average = (parseFloat(p1) / 10.0 + parseFloat(p2) / 10.0 + parseFloat(p3) / 10.0) / 3.0;
    return average;
  }

  getSituation(faults, average) {
    if (faults > 15) return 'Reprovado por Falta';
    if (average < 5.0) return 'Reprovado por Nota';
    if (average >= 5.0 && average < 7.0) return 'Exame Final';
    return 'Aprovado';
  }

  getNaf(average, faults) {
    if (average >= 5.0 && average < 7.0 && faults <= 15) {
      return Math.round(10.0 - average);
    }

    return 0;
  }
}

module.exports = Student;
