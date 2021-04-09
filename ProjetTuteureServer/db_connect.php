<?php
try{
    $db = new \PDO("mysql:host={$config["db_host"]};
                   dbname={$config["db_name"]};
                   port={$config["db_port"]};
                   charset=utf8mb4", 
                   $config["db_user"], 
                   $config["db_password"], 
                   [\PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION]);
}catch(\PDOException $e){
    echo "erreur lors de la connexion à la base de données";
}