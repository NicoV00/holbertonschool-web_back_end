export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const notaFinal = newGrades.find((nota) => nota.studentId === student.id);
      return {
        ...student,
        grade: notaFinal ? notaFinal.grade : 'N/A'
      };
    });
}
