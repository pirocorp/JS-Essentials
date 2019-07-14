function solve(inputStrings) {
    let grades = {};

    for (const line of inputStrings) {
        let [x1, name, x2, grade, x3, avgScore] = line.split(/: |, /).filter(t => t !== '');
        
        const newGrade = Number(grade) + 1;
        avgScore = Number(avgScore);

        if(avgScore < 3) {
            continue;
        }

        if (!grades.hasOwnProperty(newGrade)){
            grades[newGrade] = {};
            grades[newGrade].listOfStudents = [];
            grades[newGrade].avgScore = 0;
        }

        grades[newGrade].listOfStudents.push(name);
        grades[newGrade].avgScore += avgScore;
    }

    const sortedGrades = Array.from(Object.keys(grades))
        .sort((a, b) => sortGrades(a, b));

    for (const gradeNumber of sortedGrades) {
        const currentGrade = grades[gradeNumber];        
        const avgGrade = currentGrade.avgScore / currentGrade.listOfStudents.length;

        console.log(`${gradeNumber} Grade `);
        console.log(`List of students: ${currentGrade.listOfStudents.join(', ')}`);
        console.log(`Average annual grade from last year: ${avgGrade.toFixed(2)}`);
        console.log();
    }

    function sortGrades(a, b) {
        return Number(a) - Number(b);
    }
}

solve(['Student name: Mark, Grade: 8, Graduated with an average score: 4.75',
    'Student name: Ethan, Grade: 9, Graduated with an average score: 5.66',
    'Student name: George, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Steven, Grade: 10, Graduated with an average score: 4.20',
    'Student name: Joey, Grade: 9, Graduated with an average score: 4.90',
    'Student name: Angus, Grade: 11, Graduated with an average score: 2.90',
    'Student name: Bob, Grade: 11, Graduated with an average score: 5.15',
    'Student name: Daryl, Grade: 8, Graduated with an average score: 5.95',
    'Student name: Bill, Grade: 9, Graduated with an average score: 6.00',
    'Student name: Philip, Grade: 10, Graduated with an average score: 5.05',
    'Student name: Peter, Grade: 11, Graduated with an average score: 4.88',
    'Student name: Gavin, Grade: 10, Graduated with an average score: 4.00',
    'Student name: Tst, Grade: 7, Graduated with an average score: 4.00']
);