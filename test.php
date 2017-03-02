<?php

try{
    $db = new PDO("mysql:host=127.0.0.1;dbname=wenya589_sg2016", "wenya589_Yan", "YAN2016bcit");
}catch(PDOException $e){
    echo "Fail to connect the database";
}



if($_POST['type'] == "reg"){
   if($_POST['name'] !== null && $_POST['password'] !== null){
        $userInfo = "INSERT INTO studentguardian (username,password,email) VALUES ('".$_POST['name']."', '".$_POST['password']."', '".$_POST['email']."')";

        $db->query($userInfo);

        echo "Hi, "  . $_POST['name'];
    }else{
        echo "Fail to register";
    } 
} else {
    
    $username = "";
    $password = "";
    
    session_start();
    
     if (isset($_GET["username"]) && !empty($_GET["username"])) {

                $username =  $_GET["username"];
                $_SESSION['username'] = $username;
            }
            if (isset($_GET["password"]) && !empty($_GET["password"])) {

                $password =  $_GET["password"];
            }

    $sql = "SELECT * FROM studentguardian WHERE username = :uName AND password = :pWord";

    $statement = $db->prepare($sql);
    $statement->execute(array(":uName" => $username, ":pWord" => $password));

    $info = $statement->fetchAll();
    echo json_encode($info);
    /*echo $sql;
    echo $username;
    echo $password;*/
}


if($_POST['type'] == "Reg"){
    
                session_start();
                unset($_SESSION['username']);
                session_destroy();
                
}
//----------------------------------------------------------------------------------------------
//-------------------------------SCHEDULE TABLE-------------------------------------------------
//----------------------------------------------------------------------------------------------
if($_POST['type'] == "schedule"){
   if($_POST['title'] !== null && $_POST['instructor'] !== null && $_POST['location'] !== null && $_POST['type'] !== null){
        $timeInfo = "INSERT INTO schedule (start,end,title,instructor,location,type) VALUES ('".$_POST['start']."', '".$_POST['end']."', '".$_POST['title']."', '".$_POST['instructor']."', '".$_POST['location']."', '".$_POST['classtype']."')";
       
        $db->query($timeInfo);

        echo "Successfull stored into database";
    }else{
        echo "Fail to store";
    } 
} 

//----------------------------------------------------------------------------------------------
//-------------------------------REMINDER TABLE-------------------------------------------------
//----------------------------------------------------------------------------------------------
if($_POST['type'] == "reminder"){
   if($_POST['dueevent'] !== null && $_POST['startdate'] !== null && $_POST['starttime'] !== null && $_POST['enddate'] !== null && $_POST['endtime'] !== null){
        $dueInfo = "INSERT INTO reminder (dueevent,startdate,starttime,enddate,endtime) VALUES ('".$_POST['dueevent']."', '".$_POST['startdate']."', '".$_POST['starttime']."', '".$_POST['enddate']."', '".$_POST['endtime']."')";
       
        $db->query($dueInfo);

        echo "Successfull stored into database";
    }else{
        echo "Fail to store";
    } 
} 


?>