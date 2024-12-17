interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: string | boolean | number;
}


interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string
}


const printTeacher: printTeacherFunction = function (firstName, lastName) {
    return `${firstName.at(0)}. ${lastName}`
}

interface Student {
    firstName: string;
    lastName: string;
    workOnHomework: () => string;
    displayName: () => string;
}

class StudentClass implements Student {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework() {
        return "Currently working"
    }

    displayName() {
        return this.firstName
    }
}