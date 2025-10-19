<?php

// For Loop
for($i = 1; $i <= 5; $i++){
    echo $i . " ";
}

echo "<br>";

// While Loop
$x = 1;
while($x <= 5) {
    echo $x . " ";
    $x++;
}

echo "<br>";

// forEach Loop
$fruits = ["Apple", "Banana", "Cherry"];
foreach($fruits as $fruit){
    echo $fruit . " ";
}
?>