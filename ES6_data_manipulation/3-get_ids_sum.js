export default function getStudentIdsSum(Students) {
  return Students.reduce((tot, Stud) => tot + Stud.id, 0);
}
