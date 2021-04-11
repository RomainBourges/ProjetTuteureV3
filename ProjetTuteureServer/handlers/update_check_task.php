<?php

header("Content-Type: application/json; charset=UTF-8");
http_response_code(400);
if(!isset($_POST["IdTask"])){
    echo json_encode(["message" => "Tache introuvable"]);
    exit;
}

try{
    $request = $db->prepare("CALL setCheckTask(?)");
    $request->execute([$_POST["IdTask"]]);
}catch(Exception $e){
    echo json_encode(["message" => messageException($e)]);
    exit;
}

http_response_code(200);
echo json_encode([
    "message" => "La tache a bien ete modifiee",
]);
exit;