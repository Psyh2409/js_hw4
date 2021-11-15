
// 4.1
function arr20PNM(params = 20) {
    let arr = [];
    for (let i = 0; i < params; i++) {
        let x = parseInt(Math.random() * 10) % 2 == 0 ? -1 : 1;
        arr.push(parseInt(Math.random() * 10) * x);
    }
    arr.length;
    return arr;
}
let arrPNM = arr20PNM();

//4.1.а
let ascend = arrPNM.slice(0).sort((a, b) => a - b);

//4.1.b
let descend = arrPNM.slice(0).sort((a, b) => b - a);

//4.2
let negative = arrPNM.filter(x => x < 0);
let positive = arrPNM.filter(x => x >= 0);

//4.3
function studentMaker(age, groupName) {
    let student = {};
    student.age = age;
    student.groupName = groupName;
    student.toString = function () { return `\nage is ${student.age}, groupName is ${student.groupName}`};
    return student;
}
function arr10Studs(capacity = 10) {
    let stdnts = new Array(capacity);
    for (let i = 0; i < stdnts.length; i++) {
        stdnts[i] = studentMaker(parseInt(Math.random() * 100), parseInt(Math.random() * 10));
    }
    return stdnts;
}
let students = arr10Studs(5);

//4.3.a
let groupNames = Array.from(students, x => x=x.groupName);

//4.3.b
let totalAge = students.reduce((x, y) => x + y.age, 0);

//4.3.c
let underages = students.filter(x => x.age < 18);