export default function getListStudentIds(myStudentsArray) {
  if (!Array.isArray(myStudentsArray)) {
    return [];
  }
  return myStudentsArray.map((myStud) => myStud.id);
}
