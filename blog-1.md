Union and Intersection types are important features in TypeScript that help ensure type safety in your code & project.
<!-- Intersection types -->
Intersection types combine multiple types into one, denoted by the "&" symbol.
An intersection type combines the structure of two or more types into a single type. Any variables declared with an intersection type must satisfy all of the constraints imposed by each individual type.
Intersection types are commonly used to define objects that need to implement multiple interfaces or extend multiple classes.

Example:
interface User {
    name: string;
}

let userAdmin: User & Admin = {
    name: 'John Doe',
    role: 'admin'
};

<!-- Union types -->

Union types allow a variable to be one of several possible types, denoted by the "|" symbol.A variable with a union type can only use methods and properties that exist on all of its constituent types. If it tries to access a property that doesn't exist on one of them, TypeScript will throw a compile-time error.
You can perform conditional checks at runtime to determine which type a union value currently holds using the typeof operator or other custom logic.

Example:
let userId: string | number;

Id = 'abc123'; 
Id = 456;  

In this case, userId can either be a string or a number. This is useful when you have multiple functions with different parameter types but similar functionality.