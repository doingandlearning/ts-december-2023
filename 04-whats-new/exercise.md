# Part 1: Book Management
## Default Parameters and Object Literals:

- Create a function createBook that takes three parameters: title, author, and year. - Use default parameters to set default values for author and year.
- The function should return an object with properties: title, author, and year.

## Template Literals:

- Write a function displayBookInfo that takes a book object and returns a string using template literals. The string should be in the format: "The book 'title' by author was published in year."

# Part 2: Author Management
## Arrow Functions and this:

- Create an Author class with properties name and books (an array of books).
Add a method addBook to the Author class using an arrow function. This method should take a book object and add it to the books array.

## Let/Const:

Write a function listAuthorsBooks that iterates over an array of Author objects. Use let or const appropriately and loop through the authors to log each author's books using a template literal.

# Part 3: Iteration Techniques
## For-Of Loop:

Write a function displayAllBooks that takes an array of books and logs each book's information using the displayBookInfo function. Use a for-of loop for iteration.

## Object.entries:

Create an object libraryStats where keys are author names and values are the number of books they have written. Use Object.entries and a for-of loop to log a message for each author stating how many books they have written.