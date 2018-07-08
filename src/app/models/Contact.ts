export class Contact {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    contactNumber: string;
    status: string;

    constructor(id: number, firstName: string, lastName: string, email: string, contactNumber: string, status: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.contactNumber = contactNumber;
        this.status = status;
    }

}