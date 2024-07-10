export default function updateStudentGradeByCity(Students, city, newGrades) {
  return Students
  .filter((student) => student.location === city)
  .map((student) => {
      const notaFinal = newGrades.find((nota) => nota.studentId === student.id);
      return {
        ...student,
        nota: notaFinal ? notaFinal.grade : 'N/A'
      };
    });
}
