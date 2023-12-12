# Exercise: Refactoring Legacy Code

## Goal

Your objective is to take the provided legacy JavaScript code and refactor it to make effective use of TypeScript features. By doing this, you'll enhance code readability, robustness, and maintainability.

# Task Description:
This is a rudimentary user management system script. Your task is to refactor this legacy JavaScript code into a TypeScript project. Here are the steps you need to perform:

- Break down the code into appropriate modules.
- Add appropriate types and interfaces wherever required.
- Handle potential errors or edge cases.
- Make use of enums for consistent data if applicable.
- Ensure the new TypeScript version remains functional and achieves the same results as the legacy code when transpiled.

By the end of this exercise, you should have a more robust and maintainable user management system using TypeScript.

## Starting Code

You are provided with the following legacy JavaScript code:

``` javascript
var database = [];

function addUser(username, age, email) {
    var user = {
        id: database.length + 1,
        username: username,
        age: age,
        email: email,
        created: new Date()
    };
    database.push(user);
    return user;
}

function findUser(username) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username) {
            return database[i];
        }
    }
    return null;
}

function deleteUser(id) {
    var index = -1;
    for (var i = 0; i < database.length; i++) {
        if (database[i].id === id) {
            index = i;
            break;
        }
    }
    if (index > -1) {
        return database.splice(index, 1);
    }
    return null;
}

function listUsers() {
    return database;
}

console.log(addUser("john_doe", 30, "john.doe@example.com"));
console.log(addUser("jane_smith", 25, "jane.smith@example.com"));
console.log(listUsers());
console.log(deleteUser(1));
console.log(listUsers());
console.log(findUser("jane_smith"));
```

