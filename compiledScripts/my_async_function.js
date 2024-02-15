"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function familyUpdate(families) {
    return __awaiter(this, void 0, void 0, function* () {
        const errors = [];
        yield Promise.all(families.map((family) => __awaiter(this, void 0, void 0, function* () {
            const totalMembers = family.childrenNumber + 2;
            family.totalNumberofFamilyMembers = totalMembers;
            // Check if father's name is Yves 
            if (family.fatherName && family.fatherName.toLowerCase() === 'yves') {
                errors.push(new Error('Yves is not an allowed dad in 2022'));
            }
        })));
        if (errors.length > 0) {
            throw new Error(errors.map(error => error.message).join('\n'));
        }
    });
}
const families = [
    { fatherName: 'sa', motherName: 'Mary', childrenNumber: 2 },
    { fatherName: 'kam', motherName: 'Julliet', childrenNumber: 1 },
    { fatherName: 'Peter', motherName: 'roxy', childrenNumber: 3 }
];
familyUpdate(families)
    .then(() => {
    console.log('Family updated:', families);
})
    .catch(error => console.error('Error:', error.message));
