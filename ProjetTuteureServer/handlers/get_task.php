<?php
http_response_code(400);
header("Content-Type: application/json; charset=UTF-8");
if(!isset($_POST["IdTask"])){
    echo json_encode(["message" => "tache inconnue"]);
    exit;
}

$request = $db->prepare("SELECT * FROM task WHERE IdTask=?");
$request->execute([$_POST["IdTask"]]);
$task = $request->fetch();

if(!$task){
    echo json_encode(["message" => "Tache inconnue"]);
    exit;
}

http_response_code(200);
echo json_encode([
    "task" => $task,
    "message" => "",
]);