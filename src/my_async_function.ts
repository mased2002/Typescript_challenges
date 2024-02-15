async function familyUpdate(families: { fatherName: string, motherName: string, childrenNumber: number }[]) {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let family of families) {
                const totalMembers: number = family.childrenNumber + 2;
                family.totalNumberofFamilyMembers = totalMembers;

                // Check if father's name is Yves 
                if (family.fatherName && family.fatherName.toLowerCase() === 'yves') {
                    reject(new Error('Yves is not an allowed dad in 2022'));
                    return;
                }
            }
            resolve();
        }, 1000)
    });
}

const families: { fatherName: string, motherName: string, childrenNumber: number }[] = [
    { fatherName: 'sa', motherName: 'Mary', childrenNumber: 2 },
    { fatherName: 'yves', motherName: 'Julliet', childrenNumber: 1 },
    { fatherName: 'Peter', motherName: 'roxy', childrenNumber: 3 }
];

familyUpdate(families)
    .then(() => {
        console.log('Family updated:', families)
    })
    .catch(error => console.error('Error:', error.message));