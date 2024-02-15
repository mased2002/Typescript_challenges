"use strict";
function organizeIdentities(identityArray) {
    const result = {
        females: [],
        males: []
    };
    identityArray.forEach(identity => {
        const [fullName, ageStr, gender] = identity.split(',').map(item => item.trim());
        const [firstName, secondName] = fullName.split(' ');
        const personInfo = {
            firstName: firstName,
            'second-name': secondName,
            age: parseInt(ageStr)
        };
        if (gender.toLowerCase() === 'female') {
            result.females.push(personInfo);
        }
        else if (gender.toLowerCase() === 'male') {
            result.males.push(personInfo);
        }
    });
    return result;
}
// Example usage
const identityArray = [
    "Patrick wyne, 30, male",
    "lil wyne, 32, male",
    "Eric mimi, 21, female",
    "Dodos deck, 21, male",
    "Alian Dwine, 22, male",
    "Patrick wyne, 33, male",
    "Patrick wyne, 10, male",
    "Patrick wyne, 40, male"
];
const result = organizeIdentities(identityArray);
console.log(JSON.stringify(result));
