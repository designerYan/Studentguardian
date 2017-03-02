<?php
   try{
         $db = new PDO("mysql:host=127.0.0.1;dbname=wenya589_sg2016", "wenya589_Yan", "YAN2016bcit");
    } catch (PDOException $e){
        echo $e;
    }
   
    if($_POST['type'] == "add"){
    $q = "INSERT INTO classes (name,grade) VALUES ('".$_POST['name']."','".$_POST['grade']."')";
    $db-> query($q);
        $id=$db->lastInsertId();
        echo json_encode($id);
    };

    if($_POST['type'] == "view"){
        $q = "SELECT * FROM classes";
        $result = $db->query($q);
        $users = $result ->fetchAll();
        echo json_encode($users);
    }

    if($_POST['type'] == "delete"){
        $q = "DELETE FROM classes WHERE id =".$_POST['classID']."";
       $db->query($q);
       
       
    };
   
?>