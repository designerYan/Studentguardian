<?php

try{
    $db = new PDO("mysql:host=127.0.0.1;dbname=wenya589_sg2016", "wenya589_Yan", "YAN2016bcit");

    $query = "SELECT * FROM reminder";
    $sth = $db->prepare($query);
    $sth->execute();

    $events = array();

    while ($row = $sth->fetch(PDO::FETCH_ASSOC)) {
   
        $e = array();
        $e['id'] = $row['id'];
        $e['title'] = $row['dueevent'];
        $e['start'] = $row['startdate'] . "T" . $row['starttime'];
        $e['end'] = $row['enddate'] . "T" . $row['endtime'];
        $e['allDay'] = false;

        array_push($events, $e);

    }

    echo json_encode($events);
    exit;


}catch(PDOException $e){
    echo "Fail to connect the database";
}

    

?>