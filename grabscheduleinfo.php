<?php

try{
    $db = new PDO("mysql:host=127.0.0.1;dbname=wenya589_sg2016", "wenya589_Yan", "YAN2016bcit");
}catch(PDOException $e){
    echo "Fail to connect the database";
}


$sch = "SELECT * FROM schedule";

    $statement = $db->prepare($sch);
    $sinfo = $statement->execute();

    $sinfo = $statement->fetchAll();
    echo json_encode($sinfo);

exit;

?>