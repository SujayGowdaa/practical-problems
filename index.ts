/**
 * * Practice Problem
 * * You are building a simple library management system.
 * * Implement the following requirements using TypeScript:
 *
 * TODO: 1. Create a class Book with the following properties:
 * * - title (string, required)
 * * - author (string, required)
 * * - yearPublished (number, optional)
 * * - ISBN (string, readonly)
 *
 * TODO: 2. Define a constructor function to initialize the Book class with title, author,yearPublished, and ISBN.
 *
 * TODO: 3. Ensure that the constructor function uses the this keyword to assign values to the class properties.
 *
 * TODO: 4. Create an instance of the Book class and log its details.
 *
 * TODO: 5. Create a function logBookDetails that takes an instance of Book as a parameter and logs its details.
 *
 * TODO: 6. Create a subclass EBook that extends the Book class. Add the following properties:
 * * - fileSize (number, required)
 * * - format (string, required)
 *
 * TODO:7. Use the super method to call the constructor of the parent class Book from the EBook class.
 *
 * TODO: 8. Ensure that the yearPublished property in the Book class is optional and the ISBN property is readonly.
 */

class Book {
  title: string;
  author: string;
  yearPublished?: number;
  readonly ISBN: string;

  constructor(
    title: string,
    author: string,
    ISBN: string,
    yearPublished?: number
  ) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;

    if (yearPublished) {
      this.yearPublished = yearPublished;
    }
  }
}

const firstBook = new Book('bookName', 'sujay', 'asdasdas', 2025);

function logBookDetails(book: Book): void {
  console.log(book);
}

logBookDetails(firstBook);

class EBook extends Book {
  fileSize: number;
  format: string;

  constructor(
    title: string,
    author: string,
    ISBN: string,
    fileSize: number,
    format: string,
    yearPublished?: number
  ) {
    super(title, author, ISBN, yearPublished);
    this.fileSize = fileSize;
    this.format = format;
  }
}

const firstEBook = new EBook('bookName', 'sujay', 'asdasdas', 24, 'pdf', 2025);
logBookDetails(firstEBook);

/**
 * ! You are developing a simple employee management system for a company. Implement the following requirements using TypeScript:
 *
 * TODO: 1. Class Definition: Create a class Employee with the following properties:
 ** -  name (string, public)
 ** -  age (number, public)
 ** -  salary (number, private)
 ** -  id (number, protected)
 *
 * TODO: 2. Use shorthand syntax in the constructor to initialize the properties name and age.
 *
 * TODO: 3. Implement getter and setter methods for the salary property. The setter should ensure the salary is a positive number.
 *
 * TODO: 4. Add a static property companyName (string, public) and a static method getCompanyName that returns the company name.
 *
 * TODO: 5. Create a subclass Manager that extends the Employee class. Add an additional property department (string, public).
 *
 * TODO: 6. Override a method getDetails in the Manager class to include the department information along with the employee details.
 */

class Employee {
  static companyName: string = 'Some Company PVT LTD';

  constructor(
    public name: string,
    public age: number,
    private _salary: number,
    protected id: number
  ) {
    this.name = name;
    this.age = age;
    this.id = id;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(newSalary: number) {
    if (newSalary > 0) {
      this._salary = newSalary;
    } else {
      throw new Error('Salary is not a valid number.');
    }
  }

  public static getCompany(): string {
    return Employee.companyName;
  }

  getDetails(): string {
    return `Name: ${this.name} Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    age: number,
    salary: number,
    id: number,
    public department: string
  ) {
    super(name, age, salary, id);
  }

  getDetails(): string {
    return `${super.getDetails()} Department: ${this.department}`;
  }
}

const employee: Employee = new Employee('Sanjay', 28, 40000, 1);
console.log(employee.getDetails());

const manager: Manager = new Manager('Sujay', 24, 80000, 2, 'IT');
console.log(manager.getDetails());
