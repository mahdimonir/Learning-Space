<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Learning PHP</title>
</head>

<body>
    <?php 
        echo "<h1>Hello, PHP!</h1>";
        echo "<p>This is my index file. Here is a list of other files and folders in this directory:</p>";

        // Get an array of all files and directories in the current directory.
        $files = scandir(__DIR__);

        // Create an unordered list to display the links.
        echo "<ul>";

        // Loop through the array of files and directories.
        foreach ($files as $item) {
            // Check if the item is NOT a hidden file ('.', '..') AND NOT the current file ('index.php').
            if ($item !== '.' && $item !== '..' && $item !== 'index.php') {
                if (is_dir($item)) {
                    // Display folders.
                    echo "<li><strong><a href=\"$item/\">" . htmlspecialchars($item) . "/</a></strong></li>";
                } elseif (is_file($item)) {
                    // Display other files.
                    $linkText = pathinfo($item, PATHINFO_FILENAME);
                    echo "<li><a href=\"$item\">" . htmlspecialchars($linkText) . "</a></li>";
                }
            }
        }
        echo "</ul>";
    ?>
</body>

</html>
