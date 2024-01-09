<?php
$documentsFile = 'documents.json';

// Handle document save request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $content = $_POST['content'];
    saveDocument($content);
}

// Handle document retrieval request
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $documents = loadDocuments();
    header('Content-Type: application/json');
    echo json_encode($documents);
}

function saveDocument($content) {
    global $documentsFile;
    $documents = loadDocuments();
    $newDocument = array(
        'name' => 'Document ' . (count($documents) + 1),
        'content' => $content
    );
    $documents[] = $newDocument;
    file_put_contents($documentsFile, json_encode($documents));
}

function loadDocuments() {
    global $documentsFile;
    if (file_exists($documentsFile)) {
        $contents = file_get_contents($documentsFile);
        return json_decode($contents, true);
    } else {
        return [];
    }
}
?>
