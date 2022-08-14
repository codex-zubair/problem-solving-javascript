const love = "amar sonar javascript ami tumae valo bashi"


// *In for index value
for (i in love) {
    // console.log(i);
}

// * of for direct value
for (j of love) {
    // console.log(j);
}

const studentOfJhankarVai =
  ".ahahah .ekaht eyin evol ilahk .ahtok elob tneduts re iav raknahJ .ahceg ahtam re reyabuz";

function reverse(student) {
    return student.split("").reverse().join("");
}
console.log(reverse(studentOfJhankarVai));
