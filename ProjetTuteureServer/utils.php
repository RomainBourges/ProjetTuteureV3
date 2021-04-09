<?php

function messageException(Exception $e){
    $error = explode(":", $e->getMessage());
    return substr($error[2], 6);
}