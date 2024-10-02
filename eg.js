function hello (firstname) {
    console.log("hello" + firstname);
}
hello("paul");


function formatter (num) {
    const formatted_num ="+234" + num;
    return formatted_num;
}
const result = formatter(8112131810);
console.log("Your formatted number is " + result);






const studentMarks = [80,100, 50,40,30, 60] //an array of student marks
const average = studentMarks.reduce((sum,mark) => sum + mark, 0) / studentMarks.length
if (average > = 90) { grade = ‘A’}
else if (average > = 75) { grade = ‘B’}
else if (average > = 60) {grade = ‘C’}
else { grade = ‘F’ //for averages below 60}
    let grade;
    if (average >= 90) {
    grade = ‘A’;
    } else if (average >= 75) {
    grade = ‘B’;
    } else if (average >= 60) {
    grade = ‘C’;
    } else {
    grade = ‘F’;
    }
    return { average, grade };
    }





    // function grade checker
    function gradeChecker(score) {
        let grade;
        if(score >=70 && score <= 100){
            grade = A
        } else
            
        
    }