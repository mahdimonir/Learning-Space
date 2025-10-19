<?php
// If-else + comparison operators
// ==
// ===
// !==
// <
// <=
// >
// >=

$age = 10;
if($age <= 12) {
    echo "Too young to watch Harry Potter";
} else if ($age < 15) {
    echo "You may watch Harry Potter";
} else {
    echo "You should watch Harry Potter";
}

echo "<br>";

// logical operators
// && - and
// || - or
// ! - not
$age2 = 15;
$watched = false;

if ($age2 >= 15 && !$watched) {
    echo "You MUST watch Harry Potter";
};

echo "<br>";

if ($age2 >= 15 || !$watched) {
    echo "You should watch Harry Potter";
};

echo "<br>";

// Switch
$day = 3;
switch ($day) {
    case 1:
        echo "Monday";
        break;
    case 2:
        echo "Tuesday";
        break;
    case 3:
        echo "Wednessday";
        break;
    default:
        echo "Invalid day";
}

?>