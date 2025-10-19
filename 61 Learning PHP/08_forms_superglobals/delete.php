<?php
$contactsFile = 'contacts.json';
$uploadsDir = 'upload/';

if (isset($_GET['id'])) {
    $contactId = (int)$_GET['id'];
    $contacts = file_exists($contactsFile) ? json_decode(file_get_contents($contactsFile), true) : [];
    
    $imagePathToDelete = null;
    foreach ($contacts as $contact) {
        if ($contact['id'] === $contactId) {
            $imagePathToDelete = $contact['image'];
            break;
        }
    }
    
    $contacts = array_filter($contacts, fn($c) => $c["id"] !== $contactId);
    file_put_contents($contactsFile, json_encode($contacts, JSON_PRETTY_PRINT));
    
    if ($imagePathToDelete && file_exists($imagePathToDelete)) {
        unlink($imagePathToDelete);
        $message = "Contact and image deleted!";
    } else {
        $message = "Contact deleted, but image not found or not deleted.";
    }
} else {
    $message = "No contact ID provided.";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="3;url=index.php">
    <title>Deletion Result</title>
</head>
<body>
    <h1><?php echo $message; ?></h1>
    <p>You will be redirected in 3 seconds...</p>
    <p><a href="index.php">Click here to return now.</a></p>
</body>
</html>
