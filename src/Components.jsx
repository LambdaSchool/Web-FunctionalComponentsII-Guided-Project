import React from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render(<ReturnsNull />, document.querySelector('#target7'));


// Demonstrate a component that returns null
function ReturnsNull() {
  return null;
}

// Demonstrate a component that returns empty string
function ReturnsEmptyString() {

}

// Demonstrate a component that returns a string
function ReturnsString() {

}

// Demonstrate a component that returns object
function ReturnsObject() {

}

// Demonstrate a component that returns a single child element,
// both HTML element or another React element
function ReturnsElement() {

}

// Demonstrate a component that returns an array
function ReturnsArray() {

}

// Demonstrate a component that returns multiple children
function ReturnsMultipleChildren() {

}

// Demonstrate injecting a string through props and interpolating it
function TakesData({ data }) {

}

// Demonstrate injecting a number through props and using it
function TakesNumber({ data }) {

}

// Demonstrate injecting an array through props and iterating over it
function TakesArray({ data }) {

}

// Build a component that takes a number, and returns an h1
// saying whether you passed an odd or even number.
function EvenOrOdd({ data }) {

}
