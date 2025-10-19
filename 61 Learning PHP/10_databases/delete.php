<?php

$pdo = require 'db.php';

if(isset($_GET['id'])){
    $contactId = $_GET['id'];

    // Fetch the contact's image name before deleting
    $stmt = $pdo->prepare("SELECT image FROM contacts WHERE id = :id");
    $contacts = $stmt->fetch(PDO::FETCH_ASSOC);

    // If there is an image, delete it from the server
    if($contacts && $contacts['image']){
        $imagePath = 'upload/' . $contact['image'];
        if(file_exists($imagePath)){
            unlink($imagePath); // Delete the image from the server
        }
    }

    $stmt = $pdo->prepare("DELETE FROM contacts WHERE id = :id");
    $stmt->execute([':id' => $contactId]);

    echo "Contact Deleted";
}
?>