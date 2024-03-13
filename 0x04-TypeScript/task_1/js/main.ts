interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; 
}

//export defaut Teacher;
interface Directors extends Teacher {
    numberOfReports: number;
}

// Define the interface for the printTeacher function
interface printTeacherFunction {
    // Define the function signature
    (firstName: string, lastName: string): string;
}

// Define the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    // Get the first letter of the firstName
    const firstLetter = firstName.charAt(0);

    // Return the first letter of the firstName and the full lastName
    return `${firstLetter}. ${lastName}`;
};

// Define an interface for the constructor of the StudentClass
interface StudentClassConstructor {
    firstName: string;
    lastName: string;
}

// Define an interface for the StudentClass
interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
}

// Implement the StudentClass
class StudentClass implements StudentClass {
    firstName: string;
    lastName: string;

    constructor({ firstName, lastName }: StudentClassConstructor) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}
