"use strict";
let school = [
    {
        id: 1122,
        name: "Rashed",
        level: "H",
        isSenior: true
    },
    {
        id: 1133,
        name: "Awfa",
        level: "H",
        isSenior: true
    },
    {
        id: 3322,
        name: "Ahmed",
        level: "M",
        isSenior: false
    }
];
function print_names(names) {
    console.log(names);
}
print_names(school);
let teachers = [
    {
        id: 3344,
        name: "Ayman",
        specialty: "IT",
        courseNum: 3
    },
    {
        id: 5544,
        name: "Masha",
        specialty: "CS",
        courseNum: 2
    },
    {
        id: 7766,
        name: "Haithm",
        specialty: "CS",
        courseNum: 3
    }
];
school.push.apply(school, teachers);
for (let i = 0; i < school.length; i++) {
    if (school[i].level !== undefined) {
        console.log("Student " + school[i].name);
    }
    else {
        console.log("Teacher " + school[i].name);
    }
}
function isSeniorState(obj, isSenior) {
    obj.isSenior = isSenior;
    return obj;
}
console.log(isSeniorState(school[2], true));
function courseNumState(obj, courseNum) {
    obj.courseNum = courseNum;
    return obj;
}
console.log(courseNumState(school[3], 4));
