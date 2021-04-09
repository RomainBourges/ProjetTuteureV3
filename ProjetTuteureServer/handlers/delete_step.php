<?php

header("Content-Type: application/json; charset=UTF-8");
if(!isset($_POST["IdStep"])){
    echo json_encode([
        "message" => "Etape introuvable",
    ]);
    exit;
}

try{
    $request = $db->prepare("CALL deleteStep(?)");
    $request->execute([$_POST["IdStep"]]);
}catch(Exception $e){
    echo json_encode(["message" => messageException($e)]);
    exit;
}

$verify_request = $request->rowCount();
if($verify_request <= 0){
    echo json_encode(["message" => "erreur lors de la suppression de l'etape"]);
    exit;
}

echo json_encode(["message" => "L'etape a bien ete supprimee"]);
exit;