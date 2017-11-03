<?php

$data = file_get_contents("ips.txt");
$ip = $_SERVER['REMOTE_ADDR'];

if(true) //strpos($data, $ip) == false
{
    $data .= "\n<" . $ip . " -- " . date("F j, Y, g:i a") . ">";
    file_put_contents("ips.txt", $data);
}

?>