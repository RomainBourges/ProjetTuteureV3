<?php

header("Content-Type: application/json; charset=UTF-8");
if(!isset($_POST["IdTask"])){
    echo json_encode([
        "message" => "Tache introuvable",
    ]);
    exit;
}

try{
    $request = $db->prepare("CALL deleteTask(?)");
    $request->execute([$_POST["IdTask"]]);
}catch(Exception $e){
    echo json_encode(["message" => messageException($e)]);
    exit;
}

$verify_request = $request->rowCount();
if($verify_request <= 0){
    echo json_encode(["message" => "erreur lors de la suppression de la tache"]);
    exit;
}

echo json_encode(["message" => "La tache a bien ete supprimee"]);
exit;