let subject = "DSA"; 
let grade = 85;

console.log(
    (subject === "DSA" && grade >= 80) 
    ? "You may enroll Application Development" 
    : (subject === "Math101" && grade <= 80) 
        ? "You may enroll Calculus" 
        : "You have to enroll DSA and pass to enroll AD and Math101 and pass to enroll Calculus"
);
