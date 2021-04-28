
// get the student data. Generate situation and naf, as object properties.
class Student {
  constructor(faults,p1, p2, p3, index){
    this.media = this.getMedia(p1, p2, p3)
    this.situation = this.getSituation(faults,this.media);
    this.naf = this.getNaf(this.media, faults);
    this.index = index;
  }

  getMedia(p1, p2, p3){
    const media =  (parseFloat(p1)/10.0 + parseFloat(p2)/10.0 + parseFloat(p3)/10.0) / 3.0;
    return media;
  }

  getSituation(faults, media){
    if (faults > 15) return "Reprovado por Falta";
    else if (media < 5.0) return "Reprovado por Nota";
    else if (media >= 5.0 && media < 7.0) return "Exame Final";
    else return "Aprovado";
  }

  getNaf(media, faults){
    if (media >= 5.0 && media < 7.0 && faults <= 15){
      return Math.round(10.0 - media);
    }
    else {
      return 0;
    }
  }
}

module.exports = Student;