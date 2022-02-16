  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];
let oldEnough = people.filter(elem => elem.age >= 21);
console.log(oldEnough);

let paulArray = people.filter(elem => elem.name === 'Paul');
console.log(paulArray[0]);

// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

// Option 1
const candidates = students.filter( student => {
  let strongSkills = student.skills.filter( elem => elem.yrsExperience >= 5 );
  return strongSkills.length > 0;
});
console.log(candidates.map(student => student.name));


// Option 2
const has5YearsExp = student => student.yrsExperience >= 5;
const hasStringSkills = student => student.skills.filter(has5YearsExp).length > 0;
const candidates2 = students.filter(hasStringSkills);
console.log(candidates2.map(student => student.name));