// Define array of student objects
const prompt = require ("prompt-sync")();
const students = [
  { firstName: "Kingsley", surname: "Ben", gender: "M", age: 17, favoriteSubject: "Maths" },
  { firstName: "Amara", surname: "Amos", gender: "F", age: 18, favoriteSubject: "Maths" },
  { firstName: "Matthew", surname: "Garba", gender: "M", age: 16, favoriteSubject: "English" },
  { firstName: "Loveth", surname: "Kings", gender: "F", age: 19, favoriteSubject: "Physics" },
  { firstName: "Caring", surname: "Prince", gender: "F", age: 17, favoriteSubject: "Biology" }
];

// Function to get student details by first name
const getStudentDetails = (firstName) => {
  const student = students.find(student => student.firstName.toLowerCase() === firstName.toLowerCase());
  return student ? 
    `Name: ${student.firstName} ${student.surname}, Gender: ${student.gender}, Age: ${student.age}, Favorite Subject: ${student.favoriteSubject}` :
    "Student not found!";
};

// Prompt the user to input a student's first name
const inputFirstName = prompt("Enter the first name of the student:");
console.log(getStudentDetails(inputFirstName));