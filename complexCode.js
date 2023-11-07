// Filename: complexCode.js
// Description: This code demonstrates a complex implementation of a library management system with multiple classes and advanced functionalities.

// Class representing a Library
class Library {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.catalog = new Catalog();
    this.members = [];
    this.booksOnLoan = [];
  }

  addMember(member) {
    this.members.push(member);
  }

  removeMember(member) {
    const index = this.members.indexOf(member);
    if (index > -1) {
      this.members.splice(index, 1);
    }
  }

  lendBook(book, member) {
    if (!this.booksOnLoan.includes(book) && member.canBorrow()) {
      member.borrowBook(book);
      this.booksOnLoan.push(book);
      console.log(`Book "${book.title}" has been borrowed by ${member.name}.`);
    }
  }

  returnBook(book, member) {
    member.returnBook(book);
    const index = this.booksOnLoan.indexOf(book);
    if (index > -1) {
      this.booksOnLoan.splice(index, 1);
    }
    console.log(`Book "${book.title}" has been returned by ${member.name}.`);
  }
}

// Class representing a Catalog
class Catalog {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(book) {
    const index = this.books.indexOf(book);
    if (index > -1) {
      this.books.splice(index, 1);
    }
  }
}

// Class representing a Book
class Book {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }
}

// Class representing a Member
class Member {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.booksBorrowed = [];
  }

  canBorrow() {
    return this.booksBorrowed.length < 3;
  }

  borrowBook(book) {
    this.booksBorrowed.push(book);
  }

  returnBook(book) {
    const index = this.booksBorrowed.indexOf(book);
    if (index > -1) {
      this.booksBorrowed.splice(index, 1);
    }
  }
}

// Usage example
const library = new Library("Awesome Library", "New York");

const book1 = new Book("Book 1", "Author 1", 2000);
const book2 = new Book("Book 2", "Author 2", 2005);
const book3 = new Book("Book 3", "Author 3", 2010);

library.catalog.addBook(book1);
library.catalog.addBook(book2);
library.catalog.addBook(book3);

const member1 = new Member("John Doe", 25);
const member2 = new Member("Jane Smith", 30);

library.addMember(member1);
library.addMember(member2);

library.lendBook(book1, member1);
library.lendBook(book2, member1);

library.returnBook(book1, member1);
library.lendBook(book3, member2);

console.log("Current Library Catalog:");
console.log(library.catalog.books);

console.log("Books On Loan:");
console.log(library.booksOnLoan);