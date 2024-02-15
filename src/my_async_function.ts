

interface Family {
    fatherName: string;
    motherName: string;
    childrenNumber: number;
    totalNumberofFamilyMembers?: number; // Optional property
}

async function familyUpdate(families: Family[]) {
    const errors: Error[] = [];

    await Promise.all(families.map(async (family) => {
        const totalMembers: number = family.childrenNumber + 2;
        family.totalNumberofFamilyMembers = totalMembers;

        // Check if father's name is Yves 
        if (family.fatherName && family.fatherName.toLowerCase() === 'yves') {
            errors.push(new Error('Yves is not an allowed dad in 2022'));
        }
    }));

    if (errors.length > 0) {
        throw new Error(errors.map(error => error.message).join('\n'));
    }
}

const families: Family[] = [
    { fatherName: 'sa', motherName: 'Mary', childrenNumber: 2 },
    { fatherName: 'kam', motherName: 'Julliet', childrenNumber: 1 },
    { fatherName: 'Peter', motherName: 'roxy', childrenNumber: 3 }
];

familyUpdate(families)
    .then(() => {
        console.log('Family updated:', families)
    })
    .catch(error => console.error('Error:', error.message));