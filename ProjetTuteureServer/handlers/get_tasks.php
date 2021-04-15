<?php
http_response_code(400);
header("Content-Type: application/json; charset=UTF-8");
if(!isset($_POST["IdList"])){
    echo json_encode(["message" => "liste inconnue"]);
    exit;
}

$request = $db->prepare("SELECT getListTasks(?)");
$request->execute([$_POST["IdList"]]);
$tasks = $request->fetch();

if(!$tasks[0]){
    http_response_code(200);
    echo json_encode([
        "tasks"=>"",
        "message" => "Vous n'avez pas encore créé de tache"]);
    exit;
}


$task = explode("£", $tasks[0]);
for($i = 0; $i < sizeof($task); $i++){
    $task[$i] = explode("¤", $task[$i]);
    $task[$i] = [
        "IdTask" => $task[$i][0],
        "Listid" => $task[$i][1],
        "Title" => $task[$i][2],
        "Description" => $task[$i][3],
        "CheckTask" => $task[$i][4],
        "DeadLine" => $task[$i][5],
        "CreatedDate" => $task[$i][6],
        "FinishedSteps" => $task[$i][7],
        "TotalSteps" => $task[$i][8]
    ];
}
http_response_code(200);
echo json_encode([
    "tasks" => $task,
    "message" => "",
]);