let setStudentAgeApi = (student: { name: string; age?: number }, age: number): Promise<{ name: string; age: number }> => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (age < 0)
                reject("Bad Age");
            else {
                student.age = age;
                resolve(student);
            }
        }, 500);
    });
}

let student = { name: "denis" };
setStudentAgeApi(student, 3)
    .then(newStudent => {
        console.log("age set:", newStudent);
    })
    .catch(error => {
        console.error("age must be higher than 0:", error);
    });