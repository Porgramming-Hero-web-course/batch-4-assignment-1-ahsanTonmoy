//Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

// Define the types for Circle 
type Circle = {
    shape: 'circle';
    radius: number;
};
// Define the types for Rectangle
type Rectangle = {
    shape: 'rectangle';
    width: number;
    height: number;
};

// Define the union type for Circle and Rectangle
type shape = Circle | Rectangle;

function isCircle(shape: shape): shape is Circle {
    return shape.shape === 'circle';
}

function isRectangle(shape: shape): shape is Rectangle {
    return shape.shape === 'rectangle';
}

// Function to calculate the area of shape
function calculateShapeArea(shape: shape): number {
    if (isCircle(shape)) {
        return Math.PI * shape.radius * shape.radius;
    } else if (isRectangle(shape)) {
        return shape.width * shape.height;
    } else {
        throw 'shape not found';
    }
}

// Sample Input for circle
// const circleArea: Circle = { shape: "circle", radius: 5 };


// Sample Input rectangle:
// const rectangleArea: Rectangle = {
//     shape: "rectangle",
//     width: 4,
//     height: 6,
// };

// console.log(calculateShapeArea(circleArea));     // Area of circle
// console.log(calculateShapeArea(rectangleArea));  // Area of rectangle
