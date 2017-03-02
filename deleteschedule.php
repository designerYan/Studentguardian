<?php

try{
    $db = new PDO("mysql:host=localhost:8889;dbname=studientguaidient", "root", "root");
}catch(PDOException $e){
    echo "Fail to connect the database";
}


if($_POST['type'] == "delete"){
    $q = "DELETE FROM sechedule WHERE id = ".$_POST[scheduleID]."";
    $db->query($q);
}
    
?>