<?php

// Simple function
function sayHello(){
    echo "Hello, world!";
}
sayHello();

echo "<br>";
// with parameter
function great($name){
    echo "Hello, $name!";
}
great("Alice");

echo "<br>";
// Parameter default value
function great2($name = "Guest"){
    echo "Hello, $name!";
}
great2();
echo "<br>";
great2("Bob");

echo "<br>";
// Return from function
function multiply($a, $b){
    return $a * $b;
}
$result = multiply(4, 6);
echo "Result: " . $result;

?>