<?php
// This is a PHP file to demonstrate variables

// What is a variable?
/* A variable is a container for storing data values.
In PHP, a variable starts with the $ sign, followed by the name of the variable. */

/* 
Variables & Types:
- String
- Integer
- Boolean
- Float or Double
- Null
- Array
- Object
- Resource
 */
$name = "Mahdi"; // String
$age = 25; // Integer
$isDeveloper = true; // Boolean
$height = 5.9; // Float
$address = null; // Null
$languages = array("JavaScript", "PHP", "Go"); // Array
$fruits = ["Apple", "Banana", "Orange"]; // Another way to declare an array
// Object and Resource types are more complex and will be covered later

// Displaying variables
echo "Name: " . $name . "<br>";
echo "Age: {$age} <br>";
echo "Is Developer: " . ($isDeveloper ? 'Yes' : 'No') . "<br>";
echo "Height: " . $height . "<br>";
echo "Address: " . ($address ?? 'Not Provided') . "<br>";
echo "Languages: " . implode(", ", $languages) . "<br>";
echo "Fruits: " . implode(", ", $fruits) . "<br>";

echo "<br>";
// Print variable types
echo "Type of name: " . gettype($name) . "<br>";
echo "Type of age: " . gettype($age) . "<br>";
echo "Type of isDeveloper: " . gettype($isDeveloper) . "<br>";
echo "Type of height: " . gettype($height) . "<br>";
echo "Type of address: " . gettype($address) . "<br>";
echo "Type of languages: " . gettype($languages) . "<br>";
echo "Type of fruits: " . gettype($fruits) . "<br>";

echo "<br>";
// Print the whole variable
print_r($name);
echo "<br>";
var_dump($languages);
echo "<br>";

echo "<br>";

// Change the value and print the type
$name = 32;
echo gettype($name);
echo "<br>";

echo "<br>";

// variable checking functions
var_dump(is_string($name));
echo "<br>";
var_dump(is_int($age));
echo "<br>";
var_dump(is_bool($isDeveloper));
echo "<br>";
var_dump(is_double($height));
echo "<br>";
var_dump(is_string($address));
echo "<br>";

echo "<br>";

// check if variable is defined
var_dump(isset($name));
echo "<br>";
var_dump(isset($address));
echo "<br>";
var_dump(isset($salary));
echo "<br>";

?>