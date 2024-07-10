export default function updateStudentGradeByCity(Students, city, newGrades) {
  return Students
  .filter((student) => student.location === city)
  .map((student) => {
      const notaS =  newGrades.find((nota) => nota.studentId === student.id);
      return {
        ...student,
        nota: notaS ? notaS.nota : 'N/A'
      };
    });
}
