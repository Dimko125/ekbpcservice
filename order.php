<?php
    
    $data = $_GET['data'];
    echo $data;
    echo "<br>";
    $name = GetValue("name", $data);
    $cont = GetValue("cont", $data);
    $prob = GetValue("prob", $data);
    $addr = GetValue("addr", $data);
    
    $rAddr = $_SERVER['REMOTE_ADDR'];
    
    $d = getdate();
    $date = "$d[mday].$d[mon].$d[year] $d[hours]:$d[minutes]";
    
    $orders = file_get_contents("orders.txt");
    $orders .=
       "Date: $date
      IP: $rAddr
        Name: $name
        Contact: $cont
        Problem: $prob\r\n\r\n";
    file_put_contents("orders.txt", $orders);
    
    echo $name;
    echo "<br>";
    echo $cont;
    echo "<br>";
    echo $prob;
    echo "<br>";
    echo $addr;
	
    function GetValue($Param, $Str)
    {
        $pos = strpos($Str, $Param) + strlen($Param) + 1;
        $value = "";
        for($i = $pos; $i < strlen($Str); $i++)
        {
            if($Str[$i] == '?')
                break;
            $value .= $Str[$i];
        }
        
        return $value;
    }
	
	header("Location: ./orderComplete.html");
?>