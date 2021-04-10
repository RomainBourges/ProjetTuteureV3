<?php
http_response_code(400);
echo json_encode([
    "message" => "La page demandee n'existe pas",
]);
exit;