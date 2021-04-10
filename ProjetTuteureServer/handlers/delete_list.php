<?php

header("Content-Type: application/json; charset=UTF-8");
http_response_code(400);
if(!isset($_POST["IdList"])){
    echo json_encode([
        "message" => "Liste introuvable",
    ]);
    exit;
}

try{
    $request = $db->prepare("CALL deleteList(?)");
    $request->execute([$_POST["IdList"]]);
}catch(Exception $e){
    echo json_encode(["message" => messageException($e)]);
    exit;
}

$verify_request = $request->rowCount();
if($verify_request <= 0){
    echo json_encode(["message" => "erreur lors de la suppression de la liste"]);
    exit;
}
http_response_code(200);
echo json_encode(["message" => "La liste a bien ete supprimee"]);
exit;